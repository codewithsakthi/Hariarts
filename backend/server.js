const express = require('express');
const { google } = require('googleapis');
const fs = require('fs/promises'); // Use fs.promises for asynchronous file operations

async function createTokensFile() {
  try {
    await fs.writeFile('tokens.json', '{}');
    console.log('tokens.json file created successfully.');
  } catch (error) {
    console.error('Error creating tokens.json file:', error);
  }
}

// Call the function to create the tokens.json file
createTokensFile();


const app = express();
const PORT = process.env.PORT || 3000;

// Load your OAuth credentials (client_id, client_secret, redirect_uris) from the JSON file
const credentials = require('./secret.json');
const { client_id, client_secret, redirect_uris } = credentials.web;

// Create an OAuth client
const oAuth2Client = new google.auth.OAuth2(
  client_id, client_secret, redirect_uris[0]
);

// Middleware to set up the OAuth2 client
app.use(async (req, res, next) => {
    try {
      const tokens = await fs.promises.readFile('./tokens.json', 'utf8'); // Store tokens securely
      oAuth2Client.setCredentials(JSON.parse(tokens));
      next();
    } catch (error) {
      console.error('OAuth setup error:', error);
      res.status(500).json({ error: 'OAuth setup failed.' });
    }
  });
  
// Set up API routes
app.get('/auth', (req, res) => {
  // Generate an authentication URL and redirect the user to it
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/drive.readonly'],
  });
  res.redirect(authUrl);
});

app.get('/auth/callback', async (req, res) => {
  const code = req.query.code;
  try {
    // Exchange the code for an access token and store it
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);

    // Save the tokens securely for future use (e.g., in tokens.json)
    await fs.writeFile('./tokens.json', JSON.stringify(tokens));

    res.send('Authentication successful. You can close this window.');
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(500).send('Authentication failed.');
  }
});

// List Google Drive folders
app.get('/folders', async (req, res) => {
  const drive = google.drive({ version: 'v3', auth: oAuth2Client });
  try {
    const folders = await drive.files.list({
      q: "mimeType='application/vnd.google-apps.folder'",
    });
    res.json(folders.data);
  } catch (error) {
    console.error('Error listing folders:', error);
    res.status(500).json({ error: 'Unable to list folders' });
  }
});

// Fetch images from a folder
app.get('/folder/images/:folderId', async (req, res) => {
  const drive = google.drive({ version: 'v3', auth: oAuth2Client });
  const folderId = req.params.folderId;

  try {
    const images = await drive.files.list({
      q: `'${folderId}' in parents and mimeType='image/jpeg'`,
    });

    res.json(images.data);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: 'Unable to fetch images' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

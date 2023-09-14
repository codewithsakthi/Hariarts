import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'hari',
  webDir: 'dist/hari',
  server: {
    androidScheme: 'https'
  }
};

export default config;

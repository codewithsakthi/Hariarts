import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hariarts.app',
  appName: 'hariarts',
  webDir: 'dist/hari',
  server: {
    androidScheme: 'https'
  }
};

export default config;

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
// import { BrowserAuthOptions } from "@azure/msal-browser";

const envFile: string = "./src/dev.env";

dotenv.config({
  path: envFile
});

// export const BROWSER_AUTH_OPTIONS: BrowserAuthOptions = {
//   clientId: `${process.env.VITE_FRONTEND_CLIENT_ID}`,
//   authority: `https://login.microsoftonline.com/${process.env.VITE_TENENT_ID}`,
//   redirectUri: "/user-profile",
//   postLogoutRedirectUri: "/",
//   navigateToLoginRequestUrl: false
// }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  }
})

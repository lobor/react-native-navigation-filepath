import { defineConfig } from 'vite'
import vite from 'react-native-navigation-filepath/vite'
import reactNativeWeb from "vite-plugin-react-native-web";

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactNativeWeb(), vite.default({path:'./src/pages'})],
})

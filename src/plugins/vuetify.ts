/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

//css
import '../assets/canin.css' // Chemin relatif vers votre fichier CSS

// Composables
import { createVuetify } from 'vuetify'

// Définir votre palette personnalisée
const customTheme = {
  dark: false,
  colors: {
    primary: '#ba175d',
    secondary: '#03dac6',
    background: '#ffffff',
    surface: '#ffffff',
    error: '#b00020',
    info: '#83858a',
    success: '#4caf50',
    warning: '#fb8c00',
    text1: '#42504b',
    text3: '#319132',
    text2: '#155a16',
  },
};


// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme,
    },
  },
})

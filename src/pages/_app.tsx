import { ThemeProvider } from 'next-themes'

import {ChallangeProvider} from '../contexts/ChallengesContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <ChallangeProvider>
          <Component {...pageProps} />
      </ChallangeProvider>
      
    </ThemeProvider>
  )
}

export default MyApp

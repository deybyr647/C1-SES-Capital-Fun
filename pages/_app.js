import '../styles/globals.scss'
import '../components/template/template.css'
import '../components/loader/loader.css'
import '../components/streak/streak.css'
import '../components/missions/missions.css'
import '../components/home/goals.css'
import '../components/balance/balance.css'
import '../components/communities/community.css'
import '../components/home/balance.css'
import '../styles/login.css'
import '../styles/signup.css'
import '../components/communities/communities.css'
import '../components/modals/modals.css'

import { AuthUserProvider } from '../components/database/AuthProvider';

function MyApp({ Component, pageProps}) {
  return (
      <AuthUserProvider>
        <Component {...pageProps} />
      </AuthUserProvider>
  )
}

export default MyApp;


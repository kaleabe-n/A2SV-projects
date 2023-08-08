import '@/styles/globals.css'
import Layout from './Layout'

export default function App({ Component, pageProps }) {

  //wrap the component within the main layout
  return (
    <Layout><Component {...pageProps} /></Layout>
  )
}

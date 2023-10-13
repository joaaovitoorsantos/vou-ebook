import '@/styles/globals.css'
import 'font-awesome/css/font-awesome.min.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <head>
      <title>Minha Locadora</title>
    </head>
    <Component {...pageProps} />
    </>
  )
}

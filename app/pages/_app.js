import '@/styles/globals.css'
import BackGround from '@/components/Background'
import Header from '@/components/Header'

export default function App({ Component, pageProps }) {
  return (
    <>
      <BackGround>
        <Header />
        <Component {...pageProps} />
      </BackGround>
    </>
  )
}

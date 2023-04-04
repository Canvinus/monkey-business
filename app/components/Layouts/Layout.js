import Header from './Header'
import BackGround from './Background'

export default function Layout({ children }) {
  return (
    <BackGround>
      <Header />
      {children}
    </BackGround>
  )
}

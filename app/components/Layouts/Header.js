import Image from 'next/image'
import Button from '../Common/Button'

export default function Header() {
  return (
    <div className="flex w-screen">
      <Image
        className="h-auto max-w-full rounded-lg shadow-md m-2"
        src="/logo.png"
        width="100"
        height="100"
        alt="logo"
      />
    </div>
  )
}

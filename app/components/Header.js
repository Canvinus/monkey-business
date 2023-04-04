import Image from 'next/image'
import Button from './Button'

export default function Header() {
  return (
    <div className="flex w-screen">
      <Image
        className="h-auto max-w-full rounded-lg shadow-md m-2"
        src="/logo.png"
        width="100"
        height="100"
      />
      <div className="bg-transparent w-10/12 pb-4" />
      <div className="flex align-center justify-center mr-4">
        <Button logo="/logos/typewriter.svg" />
        <Button logo="/logos/monkey.svg" />
      </div>
    </div>
  )
}

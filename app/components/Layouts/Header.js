import Image from 'next/image'
import Payment from '@/components/Modals/Payment'

import { useState } from 'react'

export default function Header() {
  const [payment, setPayment] = useState(false)
  const handleClose = () => {
    setPayment(false)
  }
  return (
    <div className="flex justify-center items-center w-screen">
      <Image
        className="h-auto max-w-full rounded-lg shadow-md m-2"
        src="/logo.png"
        width="100"
        height="100"
        alt="logo"
      />
      <div className="bg-transparent w-4/12" />
      <button
        onClick={() => setPayment((prev) => !prev)}
        className="top-6 bg-sky-700 p-2 text-white font-bold py-2 px-4 rounded-full mr-0.5 w-28 h-14"
      >
        Donate
      </button>
      {payment && <Payment handleClose={handleClose} />}
      <div className="bg-transparent w-5/12" />
    </div>
  )
}

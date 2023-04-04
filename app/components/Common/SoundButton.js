import { useState } from 'react'
import Image from 'next/image'

export default function SoundButton({ logo, soundHandler }) {
  const [clicked, setClicked] = useState(false)

  return (
    <>
      <button
        onClick={() => {
          setClicked((prev) => !prev)
          soundHandler(clicked)
        }}
        className="flex items-center justify-center bg-indigo-400 p-2 text-white font-bold py-2 px-4 rounded-full mr-0.5 w-14 h-14"
      >
        {clicked && (
          <Image
            className="absolute z-20 invert"
            src="https://ipfs.io/ipfs/bafybeiheymfswj4u4fmjtridptbrdd4mjjidwrgrxqzsvjuvf5nmanekau/forbidden.svg"
            width="55"
            height="55"
            alt="img-forbidden"
          />
        )}
        <Image
          className="absolute z-10 invert"
          src={logo}
          width="25"
          height="25"
          alt={logo}
        />
      </button>
    </>
  )
}

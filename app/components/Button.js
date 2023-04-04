import { useState } from 'react'
import Image from 'next/image'

export default function Button({ logo }) {
  const [clicked, setClicked] = useState(false)

  return (
    <>
      <button
        onClick={() => setClicked((prev) => !prev)}
        class="flex items-center justify-center bg-indigo-400 p-2 text-white font-bold py-2 px-4 rounded-full mr-0.5 w-14 h-14"
      >
        {clicked && (
          <Image
            className="absolute z-20 invert"
            src="/logos/forbidden.svg"
            width="55"
            height="55"
          />
        )}
        <Image
          className="absolute z-10 invert"
          src={logo}
          width="25"
          height="25"
        />
      </button>
    </>
  )
}

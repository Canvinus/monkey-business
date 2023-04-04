import Head from 'next/head'

import { useEffect, useState } from 'react'

const tw_sounds = [
  'sounds/typewriter/tw1.mp3',
  'sounds/typewriter/tw2.mp3',
  'sounds/typewriter/tw3.mp3',
  'sounds/typewriter/tw4.mp3',
  'sounds/typewriter/tw5.mp3',
  'sounds/typewriter/tw6.mp3',
  'sounds/typewriter/tw7.mp3',
]

const initText = `The infinite monkey theorem states that a monkey hitting keys at random on a typewriter keyboard for an infinite amount of time will almost surely type a given text, such as the complete works of William Shakespeare. In fact, the monkey would almost surely type every possible finite text an infinite number of times.`

export default function Home() {
  const [isLoaded, setLoaded] = useState(false)
  const [text, setText] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e) => {
      const index = Math.floor(Math.random() * 7)
      const audio = new Audio(tw_sounds[index])
      audio.play()

      setCount((prev) => prev + 1)
      setText((prev) =>
        count < initText.length ? prev + initText[count] : prev + ''
      )

      setLoaded(true)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [count])

  useEffect(() => {
    const backGroundAudio = () => {
      const audio = new Audio('/sounds/monkeys/monkeys.mp3')
      audio.volume = 0.3
      audio.loop = true
      audio.play()
    }

    isLoaded && backGroundAudio()
  }, [isLoaded])

  return (
    <>
      <Head>
        <title>Monkey Business</title>
        <meta name="description" content="Infinite monkey theorem" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex items-end w-screen">
          <div
            className="bg-transparent w-3/12 pb-4"
            style={{ marginTop: '83vh' }}
          />
          <div className="bg-white rounded-lg shadow-emerald-400 p-2 w-6/12">
            <p className="font-tw text-lg">{text}</p>
          </div>
          <div className="bg-transparent w-3/12" />
        </div>
      </main>
    </>
  )
}

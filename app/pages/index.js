import SoundControls from '@/components/SoundControls'
import Head from 'next/head'

import { useEffect, useState } from 'react'

const tw_sounds = [
  'https://ipfs.io/ipfs/bafybeic7pb4emuuqj277bopkewxvgyfizgd43z6gipk32eeiq64fb7nb2a/tw1.mp3',
  'https://ipfs.io/ipfs/bafybeih54ojeermjcwvfmvfzwzyvn4xlcxxqbk37awubqlw2t2fqc2whxa/tw2.mp3',
  'https://ipfs.io/ipfs/bafybeiejv5beqdbxg43kgodcwykbk3bfuxeavqrkc7oesun2odg6buxx7a/tw3.mp3',
  'https://ipfs.io/ipfs/bafybeiefiz4tg5yodeourggt5nth5huqa3dkdtijyosdksd2nqcriqylbq/tw4.mp3',
  'https://ipfs.io/ipfs/bafybeifgio4lgu763oeaesxyfp3g77bhulecr7pt56suiz33mjlgnnzmwm/tw5.mp3',
  'https://ipfs.io/ipfs/bafybeibytpbm3kabn333wrcc7qel7fk4t7o5cmttxdde6uzc5a2ftrlsfm/tw6.mp3',
  'https://ipfs.io/ipfs/bafybeifqvow6ezs5valn4x2qwwzzd5fmhslvugizhvz5dcdb4eogyap2tm/tw7.mp3',
]

const initText = `The infinite monkey theorem states that a monkey hitting keys at random on a typewriter keyboard for an infinite amount of time will almost surely type a given text, such as the complete works of William Shakespeare. In fact, the monkey would almost surely type every possible finite text an infinite number of times.`

export default function Home() {
  const [isLoaded, setLoaded] = useState(false)
  const [text, setText] = useState('')
  const [count, setCount] = useState(0)

  const [monkeysAudio, setMonkeysAudio] = useState(null)
  const [monkeysVolume, setMonkeysVolume] = useState(0.3)
  const [twVolume, setTwVolume] = useState(1)

  useEffect(() => {
    setMonkeysAudio(
      new Audio(
        'https://ipfs.io/ipfs/bafybeig2cslxvjlfccxmkmqu6itqdzzriazioq54lttskgfj5o3fcyboqm/monkeys.mp3'
      )
    )
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      const index = Math.floor(Math.random() * 7)
      const audio = new Audio(tw_sounds[index])
      audio.volume = twVolume
      audio.play()

      setCount((prev) => prev + 1)
      setText((prev) =>
        count < initText.length ? prev + initText[count] : prev + ''
      )

      setLoaded(true)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [count, twVolume])

  useEffect(() => {
    const backGroundAudio = () => {
      monkeysAudio.volume = monkeysVolume
      monkeysAudio.loop = true
      monkeysAudio.play()
    }

    monkeysAudio && isLoaded && backGroundAudio()
  }, [monkeysAudio, isLoaded, monkeysVolume])

  const monkeySoundHandler = (status) => {
    status ? setMonkeysVolume(0.3) : setMonkeysVolume(0)
  }

  const twSoundHandler = (status) => {
    status ? setTwVolume(1) : setTwVolume(0)
  }

  return (
    <>
      <Head>
        <title>Monkey Business</title>
        <meta name="description" content="Infinite monkey theorem" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
        <link
          rel="icon"
          href="https://ipfs.io/ipfs/bafybeib3qwmkubqsqlwsehvrejahqhklek7ylpzgjmavyeru4d7bo7hfyi/favicon.ico"
        />
      </Head>
      <main>
        <SoundControls
          className="absolute top-5 right-10"
          twSoundHandler={twSoundHandler}
          monkeySoundHandler={monkeySoundHandler}
        />
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

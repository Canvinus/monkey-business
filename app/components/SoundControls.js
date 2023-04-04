import SoundButton from './Common/SoundButton'

export default function SoundControls({
  className,
  twSoundHandler,
  monkeySoundHandler,
}) {
  return (
    <div className={className}>
      <div className="bg-transparent w-10/12 pb-4" />
      <div className="flex align-center justify-center mr-4">
        <SoundButton
          logo="https://ipfs.io/ipfs/bafybeiabbua4olbrwx3ydezrwdgl6beb7qiz2jtel4rto5pavybytesypa/typewriter.svg"
          soundHandler={twSoundHandler}
        />
        <SoundButton
          logo="https://ipfs.io/ipfs/bafybeiege4rs2dgljzzlsb2xsdxpgyxippx5dgcycqa74aljlu4xzjsldy/monkey.svg"
          soundHandler={monkeySoundHandler}
        />
      </div>
    </div>
  )
}

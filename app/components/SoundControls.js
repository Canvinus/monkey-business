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
          logo="/logos/typewriter.svg"
          soundHandler={twSoundHandler}
        />
        <SoundButton
          logo="/logos/monkey.svg"
          soundHandler={monkeySoundHandler}
        />
      </div>
    </div>
  )
}

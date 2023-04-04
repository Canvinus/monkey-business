import Button from './Common/Button'

export default function SoundControls({
  className,
  twSoundHandler,
  monkeySoundHandler,
}) {
  return (
    <div className={className}>
      <div className="bg-transparent w-10/12 pb-4" />
      <div className="flex align-center justify-center mr-4">
        <Button logo="/logos/typewriter.svg" soundHandler={twSoundHandler} />
        <Button logo="/logos/monkey.svg" soundHandler={monkeySoundHandler} />
      </div>
    </div>
  )
}

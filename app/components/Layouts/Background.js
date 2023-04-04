export default function BackGround({ children }) {
  return (
    <div className="bg-gradient-to-r from-emerald-900 via-sky-800 to-indigo-400 p-2 overflow-hidden w-screen h-screen">
      {children}
    </div>
  )
}

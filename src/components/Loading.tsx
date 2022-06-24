import { SpinnerGap } from 'phosphor-react'


export default function Loading() {
  return (
    <div className="flex items-center justify-center overflow-hidden">
      <SpinnerGap size={32} weight="bold" className="w-6 h-6 animate-spin text-gray-300"/>
    </div>
  )
}

import React from 'react'

export default function MessageDefault() {
  return (
    <div className="flex-1">
      <div className="w-full h-full max-w-[1100px] mx-auto"> 
        <img src="/src/assets/wallpaper-ignite-lab.png" alt="Ignite Lab Wallpaper"/>
        <h1 className="text-2xl font-bold p-4">
          Aula não selecionada
        </h1>
        <p className="p-4 pt-0 text-gray-200 leading-relaxed">
          Clique em um dos cards ao lado direito para selecionar a aula que deseja assistir. 
        </p>
        <p className="p-4 pt-0 text-gray-200 leading-relaxed">
          Ou clique no menu do lado direito no topo da página.
        </p>
      </div>
    </div>
  )
}

import useWindowDimensions from '../hooks/useWindowDimensions';
import wallpaper from '/src/assets/wallpaper-ignite-lab.png';

export default function MessageDefault() {
  const {width} = useWindowDimensions();
  const message = [
    'Clique em um dos cards ao lado direito para selecionar a aula que deseja assistir.', 
    'Clique no menu do lado direito no topo da página para selecionar uma aula.'
  ]

  return (
    <div className="flex-1">
      <div className="h-full w-full md:w-[calc(100vw-348px)]"> 
        <img src={wallpaper} alt="Ignite Lab Wallpaper"/>
        <h1 className="text-2xl font-bold p-4">
          Aula não selecionada
        </h1>
        <p className="p-4 pt-0 text-gray-200 leading-relaxed">
          { width > 768 ? message[0] : message[1]}
        </p>
      </div>
    </div>
  )
}

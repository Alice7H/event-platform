import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { RocketseatLogo } from "./RocketseatLogo";

export default function Footer() {
  let location = useLocation();
  
  return (
    <footer className={classNames('flex gap-6 flex-col md:flex-row py-5 px-6 items-center justify-between border-t border-gray-500',{
      'w-full': location.pathname === '/',
      'md:w-[calc(100vw-380px)]': location.pathname !== '/',
    })}>
      <div className="flex gap-6 items-center justify-center flex-col md:flex-row">
        <RocketseatLogo />
        <span className="text-sm md:text-base leading-normal">Rocketseat - Todos os direitos reservados</span>
      </div>
      <a href="#"><span className="text-sm md:text-base leading-normal">Políticas de privacidade</span></a>
    </footer>
  )
}

import { List, X } from "phosphor-react";
import { Logo } from "./Logo";

interface IHeaderProps {
  changeMenu: () => void;
  isMenuClose: boolean;
}

export default function Header({changeMenu, isMenuClose}: IHeaderProps) {

  return (
    <header className="
      w-full py-5 flex items-center
      gap-4 px-8 md:px-0
      justify-between md:justify-center 
      bg-gray-700 border-b border-gray-600
      sticky top-0 z-[60]
    ">
      <Logo/> 
      <button 
        type="button"
        onClick={changeMenu}
        className="transparent rounded flex md:hidden gap-2 items-center justify-end transition-all"
      >
        <span>Aulas</span> 
        { 
          isMenuClose ? <List size={32} color="#81D8F7"/> : <X size={32} color="#81D8F7"/>
        }
      </button>  
    </header>
  )
}

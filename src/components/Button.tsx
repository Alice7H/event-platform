interface IButtonProps {
  link?: string;
  children?: React.ReactNode;
  variant: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset' | 'link';
}

export default function Button({
  link, 
  children,
  variant,
  type='button',
}: IButtonProps) {
  return (
    <a 
      href={link} 
      type={type}
      className={variant === 'primary' 
      ? `text-gray-100 bg-green-500 hover:bg-green-700 p-4 text-sm font-bold flex items-center justify-center rounded uppercase gap-2 transition-colors` 
      : `text-blue-500 hover:text-gray-900 bg-transparent hover:bg-blue-500 p-4 text-sm font-bold border border-blue-500 flex items-center justify-center rounded uppercase gap-2 transition-colors`
    } >
     {children}
    </a>
  )
}

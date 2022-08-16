const Button: React.FC<
  {
    className?: string
    isSubmit?: string
    onClick?: CallableFunction
  } & React.PropsWithChildren
> = ({ className, isSubmit, children, onClick }) => {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      onClick={() => onClick?.()}
      className={`rounded-3xl bg-x-orange-400 bg-opacity-80 transition-all hover:bg-orange-500 ${
        className || ''
      }`}
    >
      {children || 'Click Me!'}
    </button>
  )
}

export default Button

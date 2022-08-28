import { FC, MouseEventHandler, PropsWithChildren } from 'react'

const Button: FC<
  PropsWithChildren<{
    className?: string
    isSubmit?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>
  }>
> = ({ className, isSubmit, children, onClick }) => {
  const computedClass =
    'group relative h-12 select-none overflow-hidden transition-all duration-100 active:translate-y-0.5 active:shadow-none cursor-pointer touch-manipulation flex items-center justify-center shadow-lg media-hover:hover:shadow-sm active:shadow-sm rounded-xl bg-x-orange-400 text-white media-hover:hover:bg-amber-600 ' +
    (className || '')
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      onClick={onClick}
      className={computedClass}
    >
      {children || 'Button'}
    </button>
  )
}

export default Button

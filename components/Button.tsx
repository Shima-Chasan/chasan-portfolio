import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary'
  className?: string
  target?: string
  disabled?: boolean
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  type = 'button', 
  variant = 'primary',
  className = '',
  target,
  disabled = false
}: ButtonProps) {
  const baseClasses = 'btn'
  const variantClasses = variant === 'secondary' 
    ? 'bg-white text-[var(--text)] border border-[var(--line)] hover:bg-gray-50' 
    : ''
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : ''
  
  const classes = `${baseClasses} ${variantClasses} ${disabledClasses} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  )
}

import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  type = 'button', 
  variant = 'primary',
  className = ''
}: ButtonProps) {
  const baseClasses = 'btn'
  const variantClasses = variant === 'secondary' 
    ? 'bg-white text-[var(--text)] border border-[var(--line)] hover:bg-gray-50' 
    : ''
  
  const classes = `${baseClasses} ${variantClasses} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'design' | 'lesson'
  className?: string
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variantClasses = {
    default: 'text-[var(--muted)]',
    design: 'text-blue-600 border-blue-200 bg-blue-50',
    lesson: 'text-green-600 border-green-200 bg-green-50'
  }

  return (
    <span className={`badge ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  )
}

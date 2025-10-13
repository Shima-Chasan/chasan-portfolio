import Container from './Container'

interface SectionProps {
  children: React.ReactNode
  band?: boolean
  className?: string
  containerSize?: 'sm' | 'md' | 'lg' | 'xl'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  id?: string
}

export default function Section({ 
  children, 
  band = false, 
  className = '', 
  containerSize = 'lg',
  padding = 'lg',
  id
}: SectionProps) {
  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20'
  }

  const sectionClasses = band ? 'section-band' : ''

  return (
    <section id={id} className={`${sectionClasses} ${paddingClasses[padding]} ${className}`}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  )
}

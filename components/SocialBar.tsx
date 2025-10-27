import SocialIcon from './SocialIcon'

const socialLinks = [
  { 
    name: 'youtube' as const, 
    href: 'https://www.youtube.com/@chasan_ai_it',
    label: 'YouTube'
  },
  { 
    name: 'x' as const, 
    href: 'https://x.com/shima_chasan',
    label: 'X (Twitter)'
  },
  { 
    name: 'note' as const, 
    href: 'https://note.com/shima_chasan',
    label: 'note'
  },
  { 
    name: 'instagram' as const, 
    href: 'https://www.instagram.com/shima_chasan',
    label: 'Instagram'
  },
  { 
    name: 'udemy' as const, 
    href: 'https://www.udemy.com/user/dao-cun-qian-chun-2/',
    label: 'Udemy'
  }
]

export default function SocialBar() {
  return (
    <div className="flex justify-center gap-2">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          aria-label={link.label}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-gray-100 text-gray-700 transition hover:-translate-y-0.5 hover:text-gray-900 hover:shadow-[0_4px_14px_rgba(0,0,0,0.06)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
        >
          <SocialIcon name={link.name} />
        </a>
      ))}
    </div>
  )
}

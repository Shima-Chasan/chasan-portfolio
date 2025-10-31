import Image from 'next/image'
import Section from '../Section'
import Card from '../Card'
import Button from '../Button'

const services = [
  {
    title: '広報デザイン制作',
    description: '想いまで反映したデザインを設計',
    items: [
      '名刺・ショップカード',
      'チラシ・パンフ',
      'lit.link制作代行',
      'ECサイト・LP制作'
    ],
    href: '/services/design',
    image: '/images/Web Design Designer Girl.png'
  },
  {
    title: 'AI活用術レッスン',
    description: 'オンライン（YouTube/Udemy）も対面（ワークショップ/セミナー）も',
    items: [
      'YouTube',
      'Udemy',
      'ワークショップ・セミナー'
    ],
    href: '/services/teaching',
    image: '/images/Conference Speaker.png'
  }
]

export default function Services() {
  return (
    <Section id="service" padding="xl">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold font-shippori text-[var(--text)] mb-4">
          Service
        </h2>
        <p className="text-[var(--muted)] max-w-2xl mx-auto">
          デザインとAI活用で、あなたのビジネスをサポートします
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {services.map((service, index) => (
          <Card key={index} className="overflow-hidden flex flex-col h-full">
            <div className="relative aspect-[16/9] mb-6 bg-white">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-contain rounded-lg p-4"
              />
            </div>
            
            <h3 className="text-xl font-bold font-shippori text-[var(--text)] mb-3">
              {service.title}
            </h3>
            
            <p className="text-[var(--muted)] mb-4">
              {service.description}
            </p>
            
            <ul className="space-y-2 mb-6 flex-grow">
              {service.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center space-x-2 text-sm text-[var(--text)]">
                  <div className="w-1.5 h-1.5 bg-[var(--brand)] rounded-full flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Button href={service.href} className="w-full mt-auto">
              詳細を見る
            </Button>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <p className="text-sm text-[var(--muted)]">
          ※個別の課題相談は各詳細ページ下部の「個別コンサルのご案内」をご覧ください。
        </p>
      </div>
    </Section>
  )
}

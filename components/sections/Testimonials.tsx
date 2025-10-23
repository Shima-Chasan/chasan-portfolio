import Image from 'next/image'
import Section from '../Section'
import Card from '../Card'

const testimonials = [
  {
    name: '2025年9月',
    business: '業種：小売',
    content: '何回かお話ししてこちらの商品の思いが、センスのある文章や写真で散りばめられ見やすくとても良いものができました。ありがとうございました。',
    image: '/images/voice1.png',
    rating: '良い'
  }
]

export default function Testimonials() {
  return (
    <Section padding="xl">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold font-shippori text-[var(--text)] mb-4">
          Voice
        </h2>
        <p className="text-[var(--muted)] max-w-2xl mx-auto">
          実際にサービスをご利用いただいたお客様からの声をご紹介します
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <div className="flex items-center mb-4">
              <div className="relative w-16 h-16 mr-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <div className="font-bold text-[var(--text)] mb-1">{testimonial.name}</div>
                <div className="text-sm text-[var(--muted)]">{testimonial.business}</div>
              </div>
              <div className="ml-4">
                <span className="inline-block px-4 py-2 bg-[var(--brand)]/10 text-[var(--brand)] rounded-full text-sm font-medium">
                  評価：{testimonial.rating}
                </span>
              </div>
            </div>
            
            <blockquote className="text-[var(--text)] leading-relaxed">
              {testimonial.content}
            </blockquote>
          </Card>
        ))}
      </div>
    </Section>
  )
}

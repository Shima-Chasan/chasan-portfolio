import Image from 'next/image'
import Section from '../Section'
import Card from '../Card'

const testimonials = [
  {
    name: '田中様',
    business: '個人サロン経営',
    content: 'デザインだけでなく、集客の導線まで考えてくださり、売上が2倍になりました。AIツールの使い方も教えてもらい、日々の業務が格段に楽になりました。',
    image: '/testimonial-1.jpg'
  },
  {
    name: '佐藤様',
    business: '雑貨店オーナー',
    content: 'LINE公式アカウントの設計から運用まで、丁寧にサポートしていただきました。お客様とのコミュニケーションが取りやすくなり、リピート率が向上しています。',
    image: '/testimonial-2.jpg'
  },
  {
    name: '山田様',
    business: 'フリーランス',
    content: 'ChatGPTの活用術を学んで、提案書作成の時間が半分になりました。分かりやすい説明で、ITが苦手な私でもすぐに実践できました。',
    image: '/testimonial-3.jpg'
  }
]

export default function Testimonials() {
  return (
    <Section padding="xl">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold font-shippori text-[var(--text)] mb-4">
          お客様の声
        </h2>
        <p className="text-[var(--muted)] max-w-2xl mx-auto">
          実際にサービスをご利用いただいたお客様からの声をご紹介します
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 mr-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div>
                <div className="font-bold text-[var(--text)]">{testimonial.name}</div>
                <div className="text-sm text-[var(--muted)]">{testimonial.business}</div>
              </div>
            </div>
            
            <blockquote className="text-[var(--text)] text-sm leading-relaxed">
              "{testimonial.content}"
            </blockquote>
          </Card>
        ))}
      </div>
    </Section>
  )
}

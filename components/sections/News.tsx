import Image from 'next/image'
import Section from '../Section'
import Card from '../Card'

const news = [
  {
    date: '2024.03.15',
    title: 'ChatGPT活用セミナーを開催しました',
    excerpt: '鹿児島市内で開催したセミナーには30名の方にご参加いただき...',
    image: '/news-1.jpg'
  },
  {
    date: '2024.03.01',
    title: 'Udemy講座「Canvaで作る効果的なデザイン」リリース',
    excerpt: '初心者でも簡単にプロ級のデザインが作れる講座を公開しました...',
    image: '/news-2.jpg'
  },
  {
    date: '2024.02.20',
    title: 'LINE公式アカウント構築サービス開始',
    excerpt: '集客から顧客管理まで一貫してサポートする新サービスを...',
    image: '/news-3.jpg'
  }
]

export default function News() {
  return (
    <Section id="news" band padding="xl">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold font-shippori text-[var(--text)] mb-4">
          News
        </h2>
        <p className="text-[var(--muted)] max-w-2xl mx-auto">
          最新のお知らせや活動報告をお届けします
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {news.map((item, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative aspect-[16/9] mb-4">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            
            <div className="text-sm text-[var(--muted)] mb-2">
              {item.date}
            </div>
            
            <h3 className="text-lg font-bold font-shippori text-[var(--text)] mb-2 line-clamp-2">
              {item.title}
            </h3>
            
            <p className="text-[var(--muted)] text-sm line-clamp-3">
              {item.excerpt}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  )
}

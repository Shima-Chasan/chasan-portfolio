import Image from 'next/image'
import Button from '../Button'
import Section from '../Section'

export default function Hero() {
  return (
    <Section padding="xl">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* 左側：キャッチコピー */}
        <div className="text-center lg:text-left">
          <div className="mb-4">
            <span className="inline-block px-6 py-3 bg-[var(--brand)]/10 text-[var(--brand)] rounded-full text-base md:text-lg font-medium">
              やさしく伝わるデザインとAI活用
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold font-shippori text-[var(--text)] mb-6 leading-tight">
            <span className="block">あなたの想いを、</span>
            <span className="block text-[var(--brand)]">カタチに。</span>
          </h1>
          
          <p className="text-base md:text-lg leading-7 text-[var(--muted)] mb-8">
            名刺・ショップカード・EC・LP制作＆AI時短サポート
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button href="/#projects" variant="secondary">
              実績を見る
            </Button>
            <Button href="/#contact">
              お問い合わせ
            </Button>
          </div>
        </div>
        
        {/* 右側：画像 */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
          <Image
            src="/images/hero.png"
            alt="ちゃーさんのデザイン制作風景"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </Section>
  )
}

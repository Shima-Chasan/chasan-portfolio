import Image from 'next/image'
import Section from '../Section'
import Badge from '../Badge'
import SocialBar from '../SocialBar'

const skills = [
  'ChatGPT/Gemini',
  'Canva',
  'AppSheet',
  'lit.link 制作代行',
  'LP制作',
  'Windsurf',
  'BASE/EC構築'
]


export default function About() {
  return (
    <Section id="about" band padding="xl">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold font-shippori text-[var(--text)] mb-4">
          About
        </h2>
        <p className="text-[var(--muted)] max-w-2xl mx-auto">
          プロフィールとスキルをご紹介します
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src="/images/ちゃーさん AI アイコン（透過）.png"
              alt="ちゃーさんのプロフィール写真"
              fill
              className="object-contain rounded-full bg-gradient-to-br from-[var(--brand)]/10 to-[var(--brand)]/20"
            />
          </div>
          
          <h3 className="text-xl font-bold font-zen text-[var(--text)] mb-4">
            ちゃーさん
          </h3>
          
          <div className="mb-6">
            <SocialBar />
          </div>
        </div>

        <div>
          <p className="text-base md:text-lg leading-7 text-[var(--text)] mb-8">
            <strong>「むずかしいITをやさしく」</strong>。AIとノーコードで業務をラクに、
            デザインで想いを伝わりやすく。鹿児島を拠点に、全国のスモールビジネスを
            サポートしています。
          </p>
          
          <div>
            <h4 className="text-lg font-bold font-shippori text-[var(--text)] mb-4">
              スキル・得意分野
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index}>{skill}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

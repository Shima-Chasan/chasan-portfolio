import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Badge from '@/components/Badge'
import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: '1',
    title: '寿司店ののぼり作成',
    description: '寿司店ののぼりを作成しました。',
    image: '/images/202510_sushigen-nobori.png',
    tag: 'デザイン',
    year: '2025.10'
  },
  {
    id: '2',
    title: '珈琲ショップのECサイト制作',
    description: '珈琲ショップのECサイト（BASE）を制作しました。',
    image: '/images/202509_mitsu-ec.png',
    tag: 'デザイン',
    year: '2025.09'
  },
  {
    id: '3',
    title: '寿司店のHP制作',
    description: '寿司店のHPを制作しました。',
    image: '/images/202508_sushigen-hp.png',
    tag: 'デザイン',
    year: '2025.08'
  },
  {
    id: '4',
    title: '珈琲ショップのリーフレット・カード作成',
    description: '珈琲ショップのリーフレット、商品カードを作成しました。',
    image: '/images/202507_mitsu.png',
    tag: 'デザイン',
    year: '2025.07'
  },
  {
    id: '5',
    title: '寿司店のランチメニュー表作成',
    description: '店内のランチメニュー表を作成しました。',
    image: '/images/202506_sushigen-lunch.png',
    tag: 'デザイン',
    year: '2025.06'
  },
  {
    id: '6',
    title: 'AI活用ワークショップ',
    description: '図書館にて初心者向けにAI活用ワークショップを開催しました。',
    image: '/images/202506workshop.png',
    tag: 'レッスン',
    year: '2025.06'
  },
  {
    id: '7',
    title: '寿司店の名刺作成',
    description: '寿司店の店長および店員の名刺を作成しました。',
    image: '/images/202506_sushigencard.png',
    tag: 'デザイン',
    year: '2025.06'
  },
  {
    id: '8',
    title: '寿司店のメニュー表作成',
    description: '寿司店の店内用メニュー表、出前用メニュー表を作成しました。',
    image: '/images/202505_sushigen-menu.png',
    tag: 'デザイン',
    year: '2025.05'
  },
  {
    id: '9',
    title: 'AI活用ワークショップ',
    description: '図書館にて初心者向けにAI活用ワークショップを開催しました。',
    image: '/images/202504workshop.png',
    tag: 'レッスン',
    year: '2025.04'
  },
  {
    id: '10',
    title: 'セミナー登壇（ChatGPT活用法）',
    description: '所属しているオンラインコミュニティの「今日から始める稼ぐスキルの育て方セミナー」にて登壇しました。',
    image: '/images/20250125_seminar.JPG',
    tag: 'レッスン',
    year: '2025.01'
  }
]

const categories = ['すべて', 'ブランディング', 'ECサイト', 'Webサイト', 'LINE活用', 'AI活用術', 'デザインツール', 'ノーコード', 'SNS活用']

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section padding="xl" className="bg-gradient-to-b from-white to-[var(--section)]">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold font-shippori text-[var(--text)] mb-6">
              Projects
            </h1>
            <p className="text-lg text-[var(--muted)] max-w-3xl mx-auto leading-relaxed">
              これまでの制作実績・レッスン実績をご紹介します。<br />
              お客様の課題解決から成果まで、具体的な事例をご覧ください。
            </p>
          </div>
        </Section>

        {/* Filter Tabs */}
        <Section padding="md">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category, index) => (
              <Badge key={index} className="cursor-pointer hover:bg-[var(--brand)]/10 transition-colors">
                {category}
              </Badge>
            ))}
          </div>
        </Section>

        {/* Projects Grid */}
        <Section padding="lg">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link key={index} href={`/projects/${project.id}`} className="block hover:opacity-80 transition-opacity">
                <Card className="overflow-hidden h-full">
                  <div className="relative aspect-[16/9] mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={`rounded-lg ${project.image.includes('workshop') ? 'object-cover object-top' : 'object-cover'}`}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant={project.tag === 'デザイン' ? 'design' : 'lesson'}>
                      #{project.tag}
                    </Badge>
                    <span className="text-xs text-[var(--muted)]">{project.year}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold font-shippori text-[var(--text)] mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-[var(--muted)] text-sm line-clamp-3">
                    {project.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <Section band padding="lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold font-shippori text-[var(--text)] mb-4">
              あなたのプロジェクトも始めませんか？
            </h2>
            <p className="text-[var(--muted)] mb-8 max-w-2xl mx-auto">
              お客様の課題に合わせて最適なソリューションをご提案します。<br />
              まずはお気軽にご相談ください。
            </p>
            <Button href="/#contact">
              お問い合わせ
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}

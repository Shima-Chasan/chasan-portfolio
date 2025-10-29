import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Badge from '@/components/Badge'
import Button from '@/components/Button'
import Image from 'next/image'

const projects = [
  {
    title: '地域カフェの総合ブランディング',
    description: 'ロゴデザインから名刺、Webサイト、SNS運用まで一貫してサポート。開店3ヶ月で目標売上を達成し、地域の人気店として定着。',
    challenge: '新規開店で認知度ゼロ',
    solution: 'ブランド統一とSNS戦略で地域密着型の集客を実現',
    image: '/project-1.jpg',
    tag: 'デザイン',
    category: 'ブランディング',
    year: '2024'
  },
  {
    title: 'ChatGPT活用セミナー（製造業向け）',
    description: '製造業の管理職30名を対象に、業務効率化のためのChatGPT活用法を指導。参加者の90%が「すぐに実践したい」と回答。',
    challenge: 'IT活用に不安を持つ従業員が多い',
    solution: '実務に直結する具体例で段階的に学習をサポート',
    image: '/project-2.jpg',
    tag: 'レッスン',
    category: 'AI活用術',
    year: '2024'
  },
  {
    title: 'ECサイト制作・運用サポート',
    description: 'BASE活用でハンドメイド商品のECサイトを構築。商品撮影からページ設計、広告運用まで包括的にサポートし、売上3倍を実現。',
    challenge: '商品は良いが売り方が分からない',
    solution: '商品の魅力を最大化する撮影・ページ設計・導線設計',
    image: '/project-3.jpg',
    tag: 'デザイン',
    category: 'ECサイト',
    year: '2024'
  },
  {
    title: 'Canvaテンプレート制作講座',
    description: 'オンライン講座で50名が参加。デザイン未経験者でも30分でプロ級のチラシが作れるテンプレート活用術を指導。',
    challenge: 'デザインスキルがないが自作したい',
    solution: '効率的なテンプレート活用法と応用テクニックを体系化',
    image: '/project-4.jpg',
    tag: 'レッスン',
    category: 'デザインツール',
    year: '2024'
  },
  {
    title: '士業事務所のWebサイト制作',
    description: '信頼性を重視したWebサイト設計。お問い合わせ数が月10件から30件に増加し、新規顧客獲得に大きく貢献。',
    challenge: 'ホームページからの問い合わせが少ない',
    solution: '信頼性とアクセシビリティを重視した設計・導線最適化',
    image: '/project-5.jpg',
    tag: 'デザイン',
    category: 'Webサイト',
    year: '2023'
  },
  {
    title: 'AppSheet活用ワークショップ',
    description: '中小企業向けにノーコードでの業務システム構築を指導。参加企業の80%が実際にシステムを導入し、業務効率が向上。',
    challenge: 'システム開発のコストが高い',
    solution: 'ノーコードツールで低コスト・短期間でのシステム構築を実現',
    image: '/project-6.jpg',
    tag: 'レッスン',
    category: 'ノーコード',
    year: '2023'
  },
  {
    title: '美容室のLINE公式アカウント構築',
    description: 'リッチメニュー設計から自動応答設定まで包括的にサポート。予約率が20%向上し、顧客満足度も大幅に改善。',
    challenge: '電話予約が多く業務が圧迫されている',
    solution: 'LINE公式アカウントで予約システムを自動化・顧客管理を効率化',
    image: '/project-7.jpg',
    tag: 'デザイン',
    category: 'LINE活用',
    year: '2023'
  },
  {
    title: 'セミナー登壇（ChatGPT活用法）',
    description: '所属しているオンラインコミュニティの「今日から始める稼ぐスキルの育て方セミナー」にて登壇しました。',
    challenge: 'YouTubeを始めたいが何から手をつけて良いか分からない',
    solution: '企画から撮影、編集、運用まで体系的にサポート',
    image: '/images/20250125_seminar.JPG',
    tag: 'レッスン',
    category: 'AI活用術',
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
              <Card key={index} className="overflow-hidden">
                <div className="relative aspect-[16/9] mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
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

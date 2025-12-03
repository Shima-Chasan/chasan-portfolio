'use client'

import { useParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import Badge from '@/components/Badge'
import Button from '@/components/Button'
import Image from 'next/image'

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
    description: '珈琲ショップのECサイト（BASE）を制作しました。\n\n珈琲ショップのECサイトリンク↓\nhttps://kobomitsu.base.shop/',
    image: '/images/202509_mitsu-ec.png',
    tag: 'デザイン',
    year: '2025.09'
  },
  {
    id: '3',
    title: '寿司店のHP制作',
    description: '寿司店のHPを制作しました。\n\n日本語表記と英語表記の切り替えもできます。\n\n寿司店HPリンク↓\nhttps://sushigen-nakasu.netlify.app/',
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

export default function ProjectDetailPage() {
  const params = useParams()
  const project = projects.find(p => p.id === params.id)

  if (!project) {
    return (
      <>
        <Header />
        <main>
          <Section padding="xl">
            <div className="text-center">
              <h1 className="text-2xl font-bold font-shippori text-[var(--text)] mb-4">
                プロジェクトが見つかりません
              </h1>
              <Button href="/projects">プロジェクト一覧に戻る</Button>
            </div>
          </Section>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section padding="xl" className="bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Button href="/projects" variant="secondary">← プロジェクト一覧に戻る</Button>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <Badge variant={project.tag === 'デザイン' ? 'design' : 'lesson'}>
                #{project.tag}
              </Badge>
              <span className="text-sm text-[var(--muted)]">{project.year}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold font-shippori text-[var(--text)] mb-6">
              {project.title}
            </h1>

            <div className={`relative aspect-[16/9] mb-8 rounded-lg overflow-hidden ${project.image.includes('workshop') ? 'bg-white border border-gray-200' : ''}`}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={`${project.image.includes('workshop') ? 'object-contain p-8' : 'object-cover'}`}
              />
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold font-shippori text-[var(--text)] mb-4">
                プロジェクト概要
              </h2>
              <p className="text-[var(--text)] leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section band padding="lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold font-shippori text-[var(--text)] mb-4">
              お問い合わせ
            </h2>
            <p className="text-[var(--muted)] mb-6">
              同様のプロジェクトをご希望の方は、お気軽にご相談ください
            </p>
            <Button href="/#contact">お問い合わせはこちら</Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}

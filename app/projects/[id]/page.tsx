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
    challenge: '課題をここに記載',
    solution: '解決策をここに記載',
    image: '/images/202510_sushigen-nobori.png',
    tag: 'デザイン',
    category: 'ブランディング',
    year: '2025.10'
  },
  {
    id: '2',
    title: '珈琲ショップのECサイト制作',
    description: '珈琲ショップのECサイト（BASE）を制作しました。',
    challenge: '課題をここに記載',
    solution: '解決策をここに記載',
    image: '/images/202509_mitsu-ec.png',
    tag: 'デザイン',
    category: 'ECサイト',
    year: '2025.09'
  },
  {
    id: '3',
    title: '寿司店のHP制作',
    description: '寿司店のHPを制作しました。',
    challenge: '電話予約が多く業務が圧迫されている',
    solution: 'LINE公式アカウントで予約システムを自動化・顧客管理を効率化',
    image: '/images/202508_sushigen-hp.png',
    tag: 'デザイン',
    category: 'LINE活用',
    year: '2025.08'
  },
  {
    id: '4',
    title: '珈琲ショップのリーフレット・カード作成',
    description: '珈琲ショップのリーフレット、商品カードを作成しました。',
    challenge: '新規開店で認知度ゼロ',
    solution: 'ブランド統一とSNS戦略で地域密着型の集客を実現',
    image: '/images/202507_mitsu.png',
    tag: 'デザイン',
    category: 'ブランディング',
    year: '2025.07'
  },
  {
    id: '5',
    title: '寿司店のランチメニュー表作成',
    description: '店内のランチメニュー表を作成しました。',
    challenge: 'IT活用に不安を持つ従業員が多い',
    solution: '実務に直結する具体例で段階的に学習をサポート',
    image: '/images/202506_sushigen-lunch.png',
    tag: 'デザイン',
    category: 'AI活用術',
    year: '2025.06'
  },
  {
    id: '6',
    title: 'AI活用ワークショップ',
    description: '図書館にて初心者向けにAI活用ワークショップを開催しました。',
    challenge: '商品は良いが売り方が分からない',
    solution: '商品の魅力を最大化する撮影・ページ設計・導線設計',
    image: '/images/202506workshop.png',
    tag: 'レッスン',
    category: 'ECサイト',
    year: '2025.06'
  },
  {
    id: '7',
    title: '寿司店の名刺作成',
    description: '寿司店の店長および店員の名刺を作成しました。',
    challenge: 'デザインスキルがないが自作したい',
    solution: '効率的なテンプレート活用法と応用テクニックを体系化',
    image: '/images/202506_sushigencard.png',
    tag: 'デザイン',
    category: 'デザインツール',
    year: '2025.06'
  },
  {
    id: '8',
    title: '寿司店のメニュー表作成',
    description: '寿司店の店内用メニュー表、出前用メニュー表を作成しました。',
    challenge: 'ホームページからの問い合わせが少ない',
    solution: '信頼性とアクセシビリティを重視した設計・導線最適化',
    image: '/images/202505_sushigen-menu.png',
    tag: 'デザイン',
    category: 'Webサイト',
    year: '2025.05'
  },
  {
    id: '9',
    title: 'AI活用ワークショップ',
    description: '図書館にて初心者向けにAI活用ワークショップを開催しました。',
    challenge: 'システム開発のコストが高い',
    solution: 'ノーコードツールで低コスト・短期間でのシステム構築を実現',
    image: '/images/202504workshop.png',
    tag: 'レッスン',
    category: 'ノーコード',
    year: '2025.04'
  },
  {
    id: '10',
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

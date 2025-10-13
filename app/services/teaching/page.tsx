import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'
import Badge from '@/components/Badge'
import Image from 'next/image'

const formats = [
  {
    title: 'オンライン（YouTube）',
    description: '基礎から応用まで、いつでも学べる動画コンテンツ',
    features: ['無料で視聴可能', '繰り返し学習', '最新情報を随時更新']
  },
  {
    title: 'オンライン（Udemy）',
    description: '体系的に学べる有料講座で深く理解',
    features: ['実践的な内容', '質問サポート', '修了証明書']
  },
  {
    title: 'ワークショップ',
    description: '少人数制で実際に手を動かしながら学習',
    features: ['5-10名の少人数制', '実践重視', '個別フォロー']
  },
  {
    title: 'セミナー',
    description: '企業・団体向けの大規模研修',
    features: ['10-50名対応', 'カスタマイズ可能', '資料提供']
  }
]

const themes = [
  {
    title: 'Canvaテンプレート術',
    description: 'プロ級デザインを効率的に制作する方法',
    duration: '90分',
    target: 'デザイン初心者〜中級者'
  },
  {
    title: 'ChatGPT実践活用',
    description: '議事録・文面・要約など業務での活用法',
    duration: '120分',
    target: 'ビジネスパーソン全般'
  },
  {
    title: '小規模事業の広報ミニ講座',
    description: 'lit.link・LINE・Webのつなげ方',
    duration: '90分',
    target: '個人事業主・小規模事業者'
  },
  {
    title: 'AI×ノーコード活用術',
    description: 'AppSheetやその他ツールとの連携',
    duration: '120分',
    target: 'IT活用を進めたい事業者'
  }
]

const pricing = [
  {
    type: 'ワークショップ（5-10名）',
    duration: '90-120分',
    price: '¥50,000〜',
    includes: ['資料提供', '個別フォロー', 'アフターサポート（1週間）']
  },
  {
    type: 'セミナー（10-50名）',
    duration: '60-90分',
    price: '¥80,000〜',
    includes: ['資料提供', '録画データ', 'Q&Aセッション']
  },
  {
    type: '企業研修（カスタマイズ）',
    duration: '半日〜1日',
    price: '¥150,000〜',
    includes: ['事前ヒアリング', 'オリジナル資料', '継続サポート']
  }
]

const faqs = [
  {
    question: '機材の準備は必要ですか？',
    answer: 'オンライン開催の場合、PC・インターネット環境をご用意ください。対面の場合は会場・プロジェクター等をご準備いただければ、その他機材は持参いたします。'
  },
  {
    question: '配布資料はありますか？',
    answer: 'すべての講座で実践的な資料をご提供します。PDF形式での配布となり、講座後も復習にご活用いただけます。'
  },
  {
    question: '録画は可能ですか？',
    answer: '企業研修・セミナーの場合は録画可能です（事前にご相談ください）。ワークショップは参加者の学習効果を重視するため、録画はお断りしております。'
  },
  {
    question: 'フォローアップはありますか？',
    answer: '講座終了後1週間は質問を受け付けております。また、継続的なサポートが必要な場合は個別コンサルもご利用いただけます。'
  }
]

export default function TeachingServicePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section padding="xl" className="bg-gradient-to-b from-white to-[var(--section)]">
          <div className="text-center mb-12">
            <Badge className="mb-4">Service</Badge>
            <h1 className="text-3xl md:text-5xl font-bold font-shippori text-[var(--text)] mb-6">
              AI活用術レッスン
            </h1>
            <p className="text-lg text-[var(--muted)] max-w-3xl mx-auto leading-relaxed">
              オンライン（YouTube/Udemy）も対面（ワークショップ/セミナー）も対応。<br />
              "むずかしいIT"を"やさしく"お伝えし、<br />
              すぐに実践できるスキルを身につけていただきます。
            </p>
          </div>
          
          <div className="relative aspect-[16/9] max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-card">
            <Image
              src="/service-teaching.jpg"
              alt="AI活用術レッスンのイメージ"
              fill
              className="object-cover"
            />
          </div>
        </Section>

        {/* Formats */}
        <Section padding="xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-shippori text-[var(--text)] mb-4">
              提供形態
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              お客様のニーズに合わせて、様々な形態でレッスンを提供します
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {formats.map((format, index) => (
              <Card key={index}>
                <h3 className="text-lg font-bold font-shippori text-[var(--text)] mb-3">
                  {format.title}
                </h3>
                <p className="text-[var(--muted)] text-sm mb-4 leading-relaxed">
                  {format.description}
                </p>
                <ul className="space-y-2">
                  {format.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-[var(--text)]">
                      <div className="w-1.5 h-1.5 bg-[var(--brand)] rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        {/* Themes */}
        <Section band padding="xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-shippori text-[var(--text)] mb-4">
              レッスンテーマ例
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              実践的で即効性のあるテーマを厳選してお届けします
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {themes.map((theme, index) => (
              <Card key={index}>
                <h3 className="text-lg font-bold font-shippori text-[var(--text)] mb-2">
                  {theme.title}
                </h3>
                <p className="text-[var(--muted)] text-sm mb-4 leading-relaxed">
                  {theme.description}
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--brand)] font-medium">
                    時間: {theme.duration}
                  </span>
                  <span className="text-[var(--muted)]">
                    対象: {theme.target}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Pricing */}
        <Section padding="xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-shippori text-[var(--text)] mb-4">
              料金・開催形式
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              規模や内容に応じて柔軟に対応いたします
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan, index) => (
              <Card key={index} className="text-center">
                <h3 className="text-lg font-bold font-shippori text-[var(--text)] mb-2">
                  {plan.type}
                </h3>
                <div className="text-sm text-[var(--muted)] mb-4">
                  {plan.duration}
                </div>
                <div className="text-2xl font-bold text-[var(--brand)] mb-6">
                  {plan.price}
                </div>
                <ul className="space-y-2 text-sm text-left">
                  {plan.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-[var(--brand)] rounded-full flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        {/* FAQ */}
        <Section band padding="xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-shippori text-[var(--text)] mb-4">
              よくあるご質問
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <h3 className="text-lg font-bold text-[var(--text)] mb-3">
                  Q. {faq.question}
                </h3>
                <p className="text-[var(--muted)] leading-relaxed">
                  A. {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </Section>

        {/* Individual Consulting CTA */}
        <Section padding="lg">
          <Card className="text-center max-w-3xl mx-auto bg-gradient-to-br from-[var(--brand)]/5 to-[var(--brand)]/10">
            <h2 className="text-xl font-bold font-shippori text-[var(--text)] mb-4">
              個別コンサルのご案内
            </h2>
            <p className="text-[var(--muted)] mb-6 leading-relaxed">
              講座後の定着・体制設計を短期伴走でサポート可能です。<br />
              学んだ内容を確実に業務に活かせるよう、継続的にフォローいたします。
            </p>
            <Button href="/#contact">
              {/* TODO: implement purpose=consulting parameter passing */}
              コンサルを相談する
            </Button>
          </Card>
        </Section>
      </main>
      <Footer />
    </>
  )
}

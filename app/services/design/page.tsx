import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'
import Badge from '@/components/Badge'
import Image from 'next/image'

const services = [
  {
    title: '名刺・ショップカード',
    description: '第一印象を決める重要なツール。デザインと情報設計で差をつけます。',
    price: '¥15,000〜'
  },
  {
    title: 'チラシ・パンフレット',
    description: '読み手の行動を促すレイアウトと訴求力のあるコピーで制作。',
    price: '¥25,000〜'
  },
  {
    title: 'lit.link設計',
    description: 'SNSからの導線を最適化。コンバージョンを意識した設計。',
    price: '¥20,000〜'
  },
  {
    title: 'LINE公式アカウント',
    description: '設計・リッチメニュー・自動応答まで一貫してサポート。',
    price: '¥30,000〜'
  },
  {
    title: 'Web制作（小規模）',
    description: '更新しやすさを重視したサイト制作。運用まで考慮した設計。',
    price: '¥80,000〜'
  }
]

const process = [
  { step: '01', title: 'ヒアリング', description: 'ターゲット・目的・課題を詳しくお聞きします' },
  { step: '02', title: '骨子（導線）', description: '誰に・何を・どこで・どう動いてほしいかを設計' },
  { step: '03', title: 'ワイヤーフレーム', description: '情報の配置と流れを可視化' },
  { step: '04', title: 'デザイン', description: 'ブランドイメージに合わせたビジュアル制作' },
  { step: '05', title: '入稿/公開', description: '印刷・Web公開まで責任を持ってサポート' },
  { step: '06', title: '運用メモ', description: '継続的な運用のためのガイドを提供' }
]

const faqs = [
  {
    question: 'データはどのような形式で納品されますか？',
    answer: 'AI・PSD・PDF・JPEGなど、用途に応じて最適な形式で納品いたします。印刷用データも含まれます。'
  },
  {
    question: '修正は何回まで可能ですか？',
    answer: '初回提案後、2回まで無料で修正対応いたします。それ以降は別途料金が発生します。'
  },
  {
    question: '素材（写真・ロゴ等）は提供していただけますか？',
    answer: 'お客様でご用意いただくのが基本ですが、必要に応じて素材選定・撮影のサポートも行います。'
  },
  {
    question: '納期はどのくらいですか？',
    answer: '内容により異なりますが、名刺で1週間、Webサイトで1ヶ月程度が目安です。お急ぎの場合はご相談ください。'
  }
]

export default function DesignServicePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section padding="xl" className="bg-gradient-to-b from-white to-[var(--section)]">
          <div className="text-center mb-12">
            <Badge className="mb-4">Service</Badge>
            <h1 className="text-3xl md:text-5xl font-bold font-shippori text-[var(--text)] mb-6">
              広報デザイン制作
            </h1>
            <p className="text-lg text-[var(--muted)] max-w-3xl mx-auto leading-relaxed">
              デザインは"見た目"だけでなく<strong>導線設計</strong>が重要です。<br />
              誰に・何を・どこで・どう動いてほしいかを明確にして、<br />
              成果につながるデザインを制作します。
            </p>
          </div>
          
          <div className="relative aspect-[16/9] max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-card">
            <Image
              src="/service-design.jpg"
              alt="デザイン制作のイメージ"
              fill
              className="object-cover"
            />
          </div>
        </Section>

        {/* Services */}
        <Section padding="xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-shippori text-[var(--text)] mb-4">
              提供メニュー
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              お客様のビジネスに合わせて最適なデザインソリューションを提供します
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index}>
                <h3 className="text-lg font-bold font-shippori text-[var(--text)] mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--muted)] text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-[var(--brand)] font-bold">
                  {service.price}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Process */}
        <Section band padding="xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-shippori text-[var(--text)] mb-4">
              制作の流れ
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              お客様と二人三脚で、成果につながるデザインを制作します
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <Card key={index} className="text-center">
                <div className="w-12 h-12 bg-[var(--brand)] text-white rounded-full flex items-center justify-center font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold font-shippori text-[var(--text)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Section>

        {/* FAQ */}
        <Section padding="xl">
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
        <Section band padding="lg">
          <Card className="text-center max-w-3xl mx-auto bg-gradient-to-br from-[var(--brand)]/5 to-[var(--brand)]/10">
            <h2 className="text-xl font-bold font-shippori text-[var(--text)] mb-4">
              個別コンサルのご案内
            </h2>
            <p className="text-[var(--muted)] mb-6 leading-relaxed">
              特定の課題に対して短期で壁打ち〜伴走も可能です（スポットOK）。<br />
              デザイン戦略から運用まで、お客様のビジネスに合わせてサポートいたします。
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

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
    features: ['無料で視聴可能', '繰り返し学習', '最新情報を随時更新'],
    link: 'https://www.youtube.com/@chasan_ai_it'
  },
  {
    title: 'オンライン（Udemy）',
    description: '体系的に学べる有料講座で深く理解',
    features: ['実践的な内容', '質問サポート', '修了証明書'],
    link: 'https://www.udemy.com/user/dao-cun-qian-chun-2/'
  },
  {
    title: 'ワークショップ・セミナー',
    description: '少人数から大規模まで、対面で実践的に学習',
    features: ['5-20名対応', '実践重視', 'カスタマイズ可能', '個別フォロー']
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
    duration: '90分',
    target: 'ビジネスパーソン全般'
  },
  {
    title: 'Geminiなどその他のAIツール',
    description: 'ChatGPT以外のAIツールの特徴と活用法',
    duration: '90分',
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
    question: 'セミナー等で必要な準備がありますか？',
    answer: 'オンライン開催の場合、PC・インターネット環境をご用意ください。対面の場合は、できるだけPCやタブレットをご持参することをおすすめします。'
  },
  {
    question: '配布資料はありますか？',
    answer: 'すべての講座で実践的な資料をご提供します。スライドや参考資料をまとめたWebページを共有いたしますので、講座後もいつでも復習にご活用いただけます。'
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
              むずかしいAIの知識を、もっと身近なツールへ。<br />
              あなたの仕事や作業がもっと楽になる、実践的なスキルをお伝えします。
            </p>
          </div>
          
          <div className="relative aspect-[16/9] max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-card bg-gradient-to-br from-gray-50 to-gray-100">
            <Image
              src="/images/Conference Speaker.png"
              alt="AI活用術レッスンのイメージ"
              fill
              className="object-contain p-8"
            />
          </div>
        </Section>

        {/* Formats */}
        <Section padding="xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-shippori text-[var(--text)] mb-4">
              提供メニュー
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              お客様のニーズに合わせて、様々な形態でレッスンを提供します
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {formats.map((format, index) => (
              <Card key={index} className="flex flex-col h-full">
                <h3 className="text-lg font-bold font-shippori text-[var(--text)] mb-3">
                  {format.title}
                </h3>
                <p className="text-[var(--muted)] text-sm mb-4 leading-relaxed h-10">
                  {format.description}
                </p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {format.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-[var(--text)]">
                      <div className="w-1.5 h-1.5 bg-[var(--brand)] rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {format.link && (
                  <Button href={format.link} className="w-full mt-auto" target="_blank">
                    詳細を見る
                  </Button>
                )}
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

          <div className="grid md:grid-cols-3 gap-6">
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

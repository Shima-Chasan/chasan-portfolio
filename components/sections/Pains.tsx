import Section from '../Section'
import Card from '../Card'

const pains = [
  'サービスの魅力をもっと分かりやすく伝えたい',
  'SNSやLINEを始めたけど、活用方法が分からない',
  '事務作業に追われて本当にやりたいことに時間が割けない',
  'ITやAIは苦手だけど、業務を効率化したい'
]

export default function Pains() {
  return (
    <Section band padding="lg">
      <div className="grid lg:grid-cols-3 gap-8 items-center">
        <div className="lg:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold font-shippori text-[var(--text)] mb-8">
            こんなお悩みありませんか？
          </h2>
          
          <div className="space-y-4">
            {pains.map((pain, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-[var(--brand)] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                  {index + 1}
                </div>
                <span className="text-[var(--text)] text-lg leading-relaxed">{pain}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-1 flex justify-center">
          <div className="w-64 h-64 rounded-full bg-white border border-[var(--brand)]/20 flex flex-col items-center justify-center text-center p-8 shadow-card">
            <div className="text-lg font-bold text-[var(--text)] mb-3">
              一緒に課題を言語化して、デザインと仕組みで解決。
            </div>
            <p className="text-[var(--brand)] text-sm leading-relaxed font-medium">
              "伝わる"と"時短"を両立します。
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

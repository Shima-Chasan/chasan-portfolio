import Image from 'next/image'
import Section from '../Section'
import Card from '../Card'
import Badge from '../Badge'
import Button from '../Button'

const projects = [
  {
    title: 'コーヒーショップのECサイト',
    description: 'リーフレットやショップカードの制作も一貫してサポート',
    image: '/images/mitsu-Mockup.png',
    tag: 'デザイン'
  },
  {
    title: '2025年4月ChatGPT活用ワークショップ',
    description: 'ChatGPTの使い方を1時間半で学ぶ',
    image: '/images/202504workshop.png',
    tag: 'レッスン'
  },
  {
    title: '寿司店のHPを制作',
    description: '名刺やメニュー表、のぼり制作も一貫してサポート',
    image: '/images/sushigen-mockup.png',
    tag: 'デザイン'
  },
  {
    title: '2025年6月ChatGPT活用ワークショップ',
    description: 'ChatGPTの使い方を1時間半で学ぶ',
    image: '/images/202506workshop.png',
    tag: 'レッスン'
  }
]

export default function Projects() {
  return (
    <Section id="projects" band padding="xl">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold font-shippori text-[var(--text)] mb-4">
          Projects
        </h2>
        <p className="text-[var(--muted)] max-w-2xl mx-auto">
          これまでの制作実績・レッスン実績をご紹介します
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative aspect-[4/3] mb-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={`object-cover rounded-lg ${project.image.includes('sushigen') ? 'object-center' : 'object-top'}`}
              />
            </div>
            
            <div className="mb-3">
              <Badge variant={project.tag === 'デザイン' ? 'design' : 'lesson'}>
                #{project.tag}
              </Badge>
            </div>
            
            <h3 className="text-lg font-bold font-shippori text-[var(--text)] mb-2">
              {project.title}
            </h3>
            
            <p className="text-[var(--muted)] text-sm">
              {project.description}
            </p>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button href="/projects" variant="secondary">
          実績一覧を見る
        </Button>
      </div>
    </Section>
  )
}

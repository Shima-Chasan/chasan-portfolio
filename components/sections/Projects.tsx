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
    title: 'ChatGPT活用セミナー',
    description: '中小企業向けAI活用術を3時間で習得',
    image: '/project-2.jpg',
    tag: 'レッスン'
  },
  {
    title: 'ECサイト制作・運用サポート',
    description: 'BASE活用で売上3倍を実現',
    image: '/project-3.jpg',
    tag: 'デザイン'
  },
  {
    title: 'Canvaテンプレート制作講座',
    description: '効率的なデザイン制作術をオンラインで指導',
    image: '/project-4.jpg',
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
                className="object-cover rounded-lg"
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

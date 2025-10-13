import Image from 'next/image'
import Container from './Container'

export default function Footer() {
  return (
    <footer className="bg-[var(--text)] text-white py-12">
      <Container>
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="relative w-8 h-8">
              <Image
                src="/images/ちゃーさん AI アイコン（透過）.png"
                alt="ちゃーさんのアイコン"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-2xl font-bold font-zen">ちゃーさん</div>
          </div>
          <p className="text-gray-300 mb-6">
            AI×デザインで"時短"と"伝わる"をつくる
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://youtube.com/@placeholder" className="text-gray-300 hover:text-white transition-colors">
              YouTube
            </a>
            <a href="https://twitter.com/placeholder" className="text-gray-300 hover:text-white transition-colors">
              X (Twitter)
            </a>
            <a href="https://note.com/placeholder" className="text-gray-300 hover:text-white transition-colors">
              note
            </a>
            <a href="https://instagram.com/placeholder" className="text-gray-300 hover:text-white transition-colors">
              Instagram
            </a>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 ちゃーさん. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  )
}

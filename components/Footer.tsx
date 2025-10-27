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
            <a href="https://www.youtube.com/@chasan_ai_it" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors">
              YouTube
            </a>
            <a href="https://x.com/shima_chasan" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors">
              X (Twitter)
            </a>
            <a href="https://note.com/shima_chasan" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors">
              note
            </a>
            <a href="https://www.instagram.com/shima_chasan" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors">
              Instagram
            </a>
            <a href="https://www.udemy.com/user/dao-cun-qian-chun-2/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors">
              Udemy
            </a>
          </div>
          <div className="text-sm text-gray-400">
            © 2025 ちゃーさん. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  )
}

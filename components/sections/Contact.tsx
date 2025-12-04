'use client'

import { useState } from 'react'
import Section from '../Section'
import Card from '../Card'
import Button from '../Button'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const formData = new FormData(e.currentTarget)
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString(),
      })

      const text = await response.text()
      console.log('Netlify forms status:', response.status)
      console.log('Netlify forms body:', text)

      // Netlify Formsは成功時に200, 201, 302などを返す
      // 400番台・500番台のみをエラーとする
      if (response.status >= 200 && response.status < 400) {
        setSubmitStatus('success')
        e.currentTarget.reset()
      } else {
        console.error('Form submission failed with status:', response.status)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section id="contact" padding="xl">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold font-shippori text-[var(--text)] mb-4">
          Contact
        </h2>
        <p className="text-[var(--muted)] max-w-2xl mx-auto mb-8">
          お気軽にお問い合わせください
        </p>
        
        <Card className="max-w-2xl mx-auto text-center bg-gradient-to-br from-[var(--brand)]/5 to-[var(--brand)]/10 mb-12">
          <p className="text-[var(--muted)] leading-relaxed">
            鹿児島を拠点に、全国オンライン対応。<br />
            初回相談は無料で承っております。<br />
            お客様の課題やご要望をお聞かせください。
          </p>
        </Card>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card>
          <form 
            name="contact" 
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Netlify Forms用のhidden input */}
            <input type="hidden" name="form-name" value="contact" />
            
            {/* Honeypot field for spam protection */}
            <p className="hidden">
              <label>
                Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
              </label>
            </p>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                ありがとうございます。送信が完了しました。
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                送信に失敗しました。もう一度お試しください。
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--text)] mb-2">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--text)] mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="purpose" className="block text-sm font-medium text-[var(--text)] mb-2">
                ご用件 <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {['制作（デザイン）', 'レッスン（AI活用術）', 'コンサル'].map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="radio"
                      name="purpose"
                      value={option}
                      defaultChecked={option === '制作（デザイン）'}
                      className="mr-2 text-[var(--brand)] focus:ring-[var(--brand)]"
                    />
                    <span className="text-[var(--text)]">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--text)] mb-2">
                メッセージ <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent resize-none"
                placeholder="お気軽にご相談内容をお聞かせください"
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? '送信中...' : '送信する'}
            </Button>
          </form>
        </Card>
      </div>
    </Section>
  )
}

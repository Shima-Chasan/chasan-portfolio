'use client'

import { useState } from 'react'
import Section from '../Section'
import Card from '../Card'
import Button from '../Button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: '制作（デザイン）',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: set your Formspree endpoint
    // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    console.log('Form submitted:', formData)
    alert('お問い合わせありがとうございます。後日ご連絡いたします。')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Section id="contact" band padding="xl">
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--text)] mb-2">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                      checked={formData.purpose === option}
                      onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent resize-none"
                placeholder="お気軽にご相談内容をお聞かせください"
              />
            </div>

            <Button type="submit" className="w-full">
              送信する
            </Button>
          </form>
        </Card>
      </div>
    </Section>
  )
}

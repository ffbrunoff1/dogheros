import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Clock, Heart, Dog } from 'lucide-react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Contact() {
  const recaptchaRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petName: '',
    petBreed: '',
    message: ''
  })
  const [status, setStatus] = useState({ message: '', isError: false })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const payload = {
        name: formData.name,
        email: formData.email,
        message: `Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Nome do Pet: ${formData.petName}
Raça: ${formData.petBreed}
Mensagem: ${formData.message}`,
        recipientEmail: "ffbrunoff@yahoo.com.br",
        token: token
      }

      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        setStatus({ message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.', isError: false })
        setFormData({
          name: '',
          email: '',
          phone: '',
          petName: '',
          petBreed: '',
          message: ''
        })
      } else {
        setStatus({ message: 'Erro ao enviar mensagem. Tente novamente.', isError: true })
      }
    } catch (error) {
      setStatus({ message: 'Erro ao enviar mensagem. Tente novamente.', isError: true })
    } finally {
      setIsSubmitting(false)
      recaptchaRef.current.reset()
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'WhatsApp',
      info: '(11) 99999-9999',
      action: 'Chamar no WhatsApp',
      link: 'https://wa.me/5511999999999',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'ffbrunoff@yahoo.com.br',
      action: 'Enviar Email',
      link: 'mailto:ffbrunoff@yahoo.com.br',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      info: 'Segunda a Domingo',
      action: '7h às 20h',
      color: 'from-purple-500 to-violet-500'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-medium mb-6">
            <Heart className="w-4 h-4 mr-2" />
            Entre em Contato
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Vamos Cuidar do seu
            <span className="gradient-text block">Melhor Amigo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para oferecer o melhor cuidado para seu pet. 
            Entre em contato e vamos agendar o primeiro passeio!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const ContactIcon = contact.icon
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 card-hover"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center`}>
                        <ContactIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1">{contact.title}</h3>
                        <p className="text-gray-600 mb-2">{contact.info}</p>
                        {contact.link ? (
                          <a
                            href={contact.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                          >
                            {contact.action}
                          </a>
                        ) : (
                          <span className="text-primary-600 font-medium">{contact.action}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <Dog className="w-8 h-8" />
                <h3 className="text-xl font-bold">Primeira Consulta Gratuita</h3>
              </div>
              <p className="text-primary-100 mb-6">
                Agende uma visita gratuita para conhecermos seu pet e suas necessidades específicas. 
                Assim poderemos oferecer o melhor cuidado personalizado.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Avaliação comportamental do pet
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Definição de rotina personalizada
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Orientações especiais de cuidado
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Agende seu Passeio</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Como podemos te chamar?"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Telefone/WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Nome do Pet
                  </label>
                  <input
                    type="text"
                    name="petName"
                    value={formData.petName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Rex, Bella, Thor..."
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Raça
                  </label>
                  <input
                    type="text"
                    name="petBreed"
                    value={formData.petBreed}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Golden, SRD, Poodle..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Conte-nos sobre seu pet, horários preferidos, necessidades especiais..."
                ></textarea>
              </div>

              {status.message && (
                <div className={`p-4 rounded-xl ${status.isError ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                  {status.message}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? 'Enviando...' : 'Agendar Consulta Gratuita'}
              </motion.button>
            </form>

            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
              size="invisible"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
import React from 'react'
import { motion } from 'framer-motion'
import { Dog, Heart, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre', id: 'about' },
    { label: 'Serviços', id: 'services' },
    { label: 'Contato', id: 'contact' }
  ]

  const services = [
    'Passeio Individual',
    'Passeio em Grupo',
    'Cuidado Premium',
    'Consulta Gratuita'
  ]

  const contactInfo = [
    {
      icon: Phone,
      text: '(11) 99999-9999',
      link: 'https://wa.me/5511999999999'
    },
    {
      icon: Mail,
      text: 'ffbrunoff@yahoo.com.br',
      link: 'mailto:ffbrunoff@yahoo.com.br'
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-accent-900/20"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl">
                <Dog className="w-8 h-8 text-white" />
              </div>
              <span className="text-3xl font-bold">DogHeros</span>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Cuidamos do seu pet com todo amor e profissionalismo que ele merece. 
              Cada passeio é uma aventura especial para seu melhor amigo.
            </p>

            <div className="flex items-center space-x-2 text-primary-300">
              <Heart className="w-5 h-5 fill-current" />
              <span className="font-medium">Feito com amor para pets felizes</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-primary-300 transition-colors duration-300 block"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4">Entre em Contato</h3>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => {
                  const ContactIcon = contact.icon
                  return (
                    <motion.a
                      key={index}
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-300 hover:text-primary-300 transition-colors duration-300 group"
                      whileHover={{ x: 5 }}
                    >
                      <ContactIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>{contact.text}</span>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            <div className="text-center md:text-right">
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-3 rounded-full font-semibold hover:from-primary-600 hover:to-accent-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Agendar Passeio
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 DogHeros. Todos os direitos reservados.
            </div>
            
            <div className="text-gray-400 text-sm">
              Criado com <em className="text-primary-300">
                <a 
                  href="https://papum.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-200 transition-colors"
                >
                  Papum
                </a>
              </em>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
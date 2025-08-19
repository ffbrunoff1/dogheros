import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Star, Shield, Clock } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const features = [
    { icon: Heart, label: 'Amor e Carinho', color: 'text-red-500' },
    { icon: Shield, label: 'Segurança Total', color: 'text-blue-500' },
    { icon: Star, label: 'Qualidade Premium', color: 'text-yellow-500' },
    { icon: Clock, label: 'Horários Flexíveis', color: 'text-green-500' }
  ]

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-accent-600/10"></div>
      
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-200/30 rounded-full blur-xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-secondary-200/30 rounded-full blur-lg floating-animation"></div>

      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-medium"
            >
              <Star className="w-4 h-4 mr-2" />
              #1 em Cuidado Canino
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold leading-tight"
            >
              Seu Pet Merece os 
              <span className="gradient-text block">Melhores Passeios</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Proporcionamos momentos únicos de alegria e exercício para seu cãozinho. 
              Com profissionais qualificados e muito amor, garantimos que cada passeio 
              seja uma aventura inesquecível para seu melhor amigo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={scrollToContact}
                className="btn-primary text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Agendar Agora
              </motion.button>
              
              <motion.button
                onClick={scrollToServices}
                className="btn-secondary text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Serviços
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-4 pt-8"
            >
              {features.map((feature, index) => {
                const FeatureIcon = feature.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-white/60 rounded-xl border border-gray-100 backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <FeatureIcon className={`w-6 h-6 ${feature.color}`} />
                    <span className="font-medium text-gray-700">{feature.label}</span>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-primary-300 to-accent-300 rounded-3xl"
                animate={{ rotate: [0, 1, 0, -1, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              ></motion.div>
              
              <motion.div
                className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-center w-32 h-32 mx-auto bg-gradient-to-br from-primary-500 to-accent-500 rounded-full">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="text-6xl"
                    >
                      🐕
                    </motion.div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Cuidado Profissional
                    </h3>
                    <p className="text-gray-600">
                      Cada passeio é planejado com amor e atenção aos detalhes
                    </p>
                  </div>
                  
                  <div className="flex justify-between text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary-600">500+</div>
                      <div className="text-sm text-gray-500">Pets Felizes</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent-600">100%</div>
                      <div className="text-sm text-gray-500">Satisfação</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary-600">24/7</div>
                      <div className="text-sm text-gray-500">Suporte</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
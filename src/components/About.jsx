import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Shield, Star, Clock, Dog } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Amor Incondicional',
      description: 'Tratamos cada pet como se fosse nosso próprio filho, com todo carinho e dedicação que eles merecem.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Segurança Absoluta',
      description: 'Protocolos rigorosos de segurança e profissionais treinados garantem a proteção total do seu pet.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Star,
      title: 'Qualidade Premium',
      description: 'Oferecemos serviços de alta qualidade com acompanhamento personalizado para cada cãozinho.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Clock,
      title: 'Flexibilidade Total',
      description: 'Horários adaptados à sua rotina, incluindo finais de semana e feriados para máxima conveniência.',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const stats = [
    { number: '500+', label: 'Pets Atendidos', icon: '🐕' },
    { number: '100%', label: 'Satisfação', icon: '⭐' },
    { number: '3', label: 'Anos de Experiência', icon: '🏆' },
    { number: '24/7', label: 'Suporte', icon: '📞' }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-medium mb-6">
            <Dog className="w-4 h-4 mr-2" />
            Sobre a DogHeros
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Cuidamos do seu Pet com
            <span className="gradient-text block">Amor e Profissionalismo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Na DogHeros, entendemos que seu pet é parte da família. Por isso, oferecemos 
            serviços de passeio com a mesma dedicação e carinho que você tem pelo seu 
            melhor amigo de quatro patas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Nossa Missão é Simples
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Proporcionar momentos de alegria, exercício e socialização para os pets, 
                garantindo que eles tenham uma vida mais saudável e feliz enquanto seus 
                donos cuidam de outras responsabilidades.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Cada passeio é uma oportunidade para criar memórias especiais e fortalecer 
                o bem-estar físico e mental do seu cãozinho, sempre com a supervisão de 
                profissionais qualificados e apaixonados por animais.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-6 rounded-2xl border border-primary-100">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Por que escolher a DogHeros?</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Profissionais certificados e apaixonados por animais
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Relatórios detalhados de cada passeio com fotos
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Seguro completo para total tranquilidade
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Atendimento personalizado para cada pet
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => {
              const ValueIcon = value.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 card-hover"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
                    <ValueIcon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="space-y-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold">{stat.number}</div>
                <div className="text-primary-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
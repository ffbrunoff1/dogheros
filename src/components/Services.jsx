import React from 'react'
import { motion } from 'framer-motion'
import { Clock, Heart, Shield, Star, Dog, Map } from 'lucide-react'

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services = [
    {
      icon: Clock,
      title: 'Passeio Individual',
      duration: '30-60 min',
      price: 'A partir de R$ 25',
      features: [
        'Atenção exclusiva para seu pet',
        'Passeio personalizado no ritmo dele',
        'Relatório com fotos do passeio',
        'Horário flexível de sua preferência',
        'Cuidados especiais se necessário'
      ],
      popular: false,
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Heart,
      title: 'Passeio em Grupo',
      duration: '45 min',
      price: 'A partir de R$ 18',
      features: [
        'Socialização com outros pets',
        'Máximo 3 cães por grupo',
        'Pets compatíveis em temperamento',
        'Supervisão constante e cuidadosa',
        'Atividades de exercício e brincadeiras'
      ],
      popular: true,
      gradient: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50'
    },
    {
      icon: Star,
      title: 'Cuidado Premium',
      duration: '90 min',
      price: 'A partir de R$ 45',
      features: [
        'Serviço VIP com cuidados extras',
        'Banho e escovação após o passeio',
        'Alimentação e hidratação incluídas',
        'Relatório detalhado com vídeos',
        'Transporte de ida e volta'
      ],
      popular: false,
      gradient: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50'
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: 'Seguro Completo',
      description: 'Cobertura total durante todo o período do passeio'
    },
    {
      icon: Map,
      title: 'GPS em Tempo Real',
      description: 'Acompanhe o passeio do seu pet em tempo real'
    },
    {
      icon: Heart,
      title: 'Cuidado Veterinário',
      description: 'Profissionais treinados em primeiros socorros'
    },
    {
      icon: Star,
      title: 'Satisfação Garantida',
      description: '100% de satisfação ou seu dinheiro de volta'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Agende o Serviço',
      description: 'Entre em contato e escolha o melhor horário',
      icon: '📅'
    },
    {
      step: '02',
      title: 'Conhecemos seu Pet',
      description: 'Primeira visita para conhecer as necessidades',
      icon: '🤝'
    },
    {
      step: '03',
      title: 'Passeio Perfeito',
      description: 'Seu pet tem o passeio dos sonhos',
      icon: '🚀'
    },
    {
      step: '04',
      title: 'Relatório Completo',
      description: 'Receba fotos e detalhes de toda a aventura',
      icon: '📸'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
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
            Nossos Serviços
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Escolha o Melhor
            <span className="gradient-text block">Para seu Pet</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos diferentes opções de passeio para atender às necessidades específicas 
            do seu pet e garantir que ele tenha a melhor experiência possível.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const ServiceIcon = service.icon
            return (
              <motion.div
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 ${
                  service.popular ? 'border-primary-200' : 'border-gray-100'
                } card-hover`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Mais Popular
                    </div>
                  </div>
                )}

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                  <ServiceIcon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-gray-600">{service.duration}</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="text-primary-600 font-bold text-lg">{service.price}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  onClick={scrollToContact}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    service.popular
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:from-primary-600 hover:to-accent-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Escolher Plano
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Benefícios Inclusos em Todos os Planos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon
              return (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 card-hover"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BenefitIcon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Como Funciona</h3>
            <p className="text-primary-100 text-lg">
              Um processo simples para garantir o melhor cuidado para seu pet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-primary-200 font-bold text-sm mb-2">PASSO {step.step}</div>
                <h4 className="font-bold mb-3 text-lg">{step.title}</h4>
                <p className="text-primary-100 text-sm">{step.description}</p>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="w-full h-0.5 bg-primary-300"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              onClick={scrollToContact}
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Começar Agora
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
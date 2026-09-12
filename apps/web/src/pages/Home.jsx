import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Users, Heart, Target, Eye, Recycle, DollarSign, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  
  const supportPillars = [{
    icon: Users,
    title: t('home.why.pillars.social.title'),
    description: t('home.why.pillars.social.desc')
  }, {
    icon: DollarSign,
    title: t('home.why.pillars.economic.title'),
    description: t('home.why.pillars.economic.desc')
  }, {
    icon: Globe,
    title: t('home.why.pillars.environmental.title'),
    description: t('home.why.pillars.environmental.desc')
  }];

  return (
    <>
      <Helmet>
        <title>{t('home.title')}</title>
        <meta name="description" content={t('home.meta')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-stone-900 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            alt={t('home.hero.imageAlt')} 
            className="w-full h-full object-cover" 
            src="https://horizons-cdn.hostinger.com/93e67a24-0ceb-4a59-803a-24d384172953/1-roXtd.PNG" 
          />
          {/* Subtle dark gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="w-8 h-8 text-emerald-400" />
              <span data-editable="true" className="text-emerald-400 font-medium">{t('home.hero.subtitle')}</span>
            </div>
            <h1 data-editable="true" className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('home.hero.title')}
            </h1>
            <p data-editable="true" className="text-xl md:text-2xl mb-8 text-white leading-relaxed">
              {t('home.hero.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/what-we-do">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto">
                  <span data-editable="true">{t('home.hero.btnLearn')}</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/donate">
                <Button size="lg" variant="outline" className="bg-white text-emerald-900 hover:bg-emerald-50 w-full sm:w-auto border-white">
                  <span data-editable="true">{t('home.hero.btnSupport')}</span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }} 
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center items-center gap-2 mb-4">
              <Target className="w-8 h-8 text-emerald-600" />
              <h2 data-editable="true" className="text-3xl md:text-4xl font-bold text-stone-800">{t('home.mission.title')}</h2>
            </div>
            <p data-editable="true" className="text-lg text-stone-600 leading-relaxed">
              {t('home.mission.desc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Support Us Section */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }} 
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <div className="flex justify-center items-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-emerald-600" />
              <h2 data-editable="true" className="text-3xl md:text-4xl font-bold text-stone-800">{t('home.why.title')}</h2>
            </div>
            <p data-editable="true" className="text-lg text-stone-600 leading-relaxed">
              {t('home.why.desc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportPillars.map((pillar, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6, delay: index * 0.1 }} 
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <pillar.icon className="w-8 h-8 text-emerald-700" />
                </div>
                <h3 data-editable="true" className="text-xl font-semibold text-stone-800 mb-3">
                  {pillar.title}
                </h3>
                <p data-editable="true" className="text-stone-600 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }} 
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center items-center gap-2 mb-4">
              <Eye className="w-8 h-8 text-emerald-600" />
              <h2 data-editable="true" className="text-3xl md:text-4xl font-bold text-stone-800">{t('home.vision.title')}</h2>
            </div>
            <p data-editable="true" className="text-lg text-stone-600 leading-relaxed">
              {t('home.vision.desc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sustainable Commitment Section */}
      <section className="py-16 bg-stone-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="max-w-3xl mx-auto"
          >
            <div className="flex justify-center items-center gap-3 mb-6">
              <Recycle className="w-8 h-8 text-emerald-400" />
              <h2 data-editable="true" className="text-3xl md:text-4xl font-bold">{t('home.commitment.title')}</h2>
            </div>
            <p data-editable="true" className="text-lg text-stone-300 mb-8 leading-relaxed">
              {t('home.commitment.desc')}
            </p>
            <Link to="/donate">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <span data-editable="true">{t('home.commitment.btn')}</span>
                <Heart className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Leaf, Sprout, Bird, Droplets, Wheat, Trees, Nut, Citrus, Banana, Users } from 'lucide-react';
import { GiGoat, GiCow, GiPig, GiBeehive } from 'react-icons/gi';
import { useTranslation } from 'react-i18next';

const WhatWeDo = () => {
  const { t } = useTranslation();

  const activities = [
    {
      value: 'agriculture',
      title: t('whatWeDo.activities.agriculture.title'),
      icon: Leaf,
      description: t('whatWeDo.activities.agriculture.desc'),
      subsections: [
        {
          icon: Nut,
          title: t('whatWeDo.activities.agriculture.subs.macadamia.title'),
          content: t('whatWeDo.activities.agriculture.subs.macadamia.desc')
        },
        {
          icon: Wheat,
          title: t('whatWeDo.activities.agriculture.subs.sugar.title'),
          content: t('whatWeDo.activities.agriculture.subs.sugar.desc')
        },
        {
          icon: Citrus,
          title: t('whatWeDo.activities.agriculture.subs.citrus.title'),
          content: t('whatWeDo.activities.agriculture.subs.citrus.desc')
        },
        {
          icon: Banana,
          title: t('whatWeDo.activities.agriculture.subs.banana.title'),
          content: t('whatWeDo.activities.agriculture.subs.banana.desc')
        }
      ]
    },
    {
      value: 'livestock',
      title: t('whatWeDo.activities.livestock.title'),
      icon: GiCow,
      description: t('whatWeDo.activities.livestock.desc'),
      subsections: [
        { icon: GiCow, title: t('whatWeDo.activities.livestock.subs.cattle.title'), content: t('whatWeDo.activities.livestock.subs.cattle.desc') },
        { icon: Bird, title: t('whatWeDo.activities.livestock.subs.poultry.title'), content: t('whatWeDo.activities.livestock.subs.poultry.desc') },
        { icon: GiBeehive, title: t('whatWeDo.activities.livestock.subs.bees.title'), content: t('whatWeDo.activities.livestock.subs.bees.desc') },
        { icon: GiGoat, title: t('whatWeDo.activities.livestock.subs.goats.title'), content: t('whatWeDo.activities.livestock.subs.goats.desc') },
        { icon: GiPig, title: t('whatWeDo.activities.livestock.subs.pigs.title'), content: t('whatWeDo.activities.livestock.subs.pigs.desc') }
      ]
    },
    {
      value: 'compost',
      title: t('whatWeDo.activities.compost.title'),
      icon: Droplets,
      description: t('whatWeDo.activities.compost.desc')
    },
    {
      value: 'forage',
      title: t('whatWeDo.activities.forage.title'),
      icon: Sprout,
      description: t('whatWeDo.activities.forage.desc')
    },
    {
      value: 'forest',
      title: t('whatWeDo.activities.forest.title'),
      icon: Trees,
      description: t('whatWeDo.activities.forest.desc')
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('whatWeDo.title')}</title>
        <meta name="description" content={t('whatWeDo.meta')} />
      </Helmet>

      <section className="relative bg-emerald-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <h1 data-editable="true" className="text-4xl md:text-5xl font-bold mb-4">{t('whatWeDo.hero.title')}</h1>
            <p data-editable="true" className="text-xl text-emerald-100">{t('whatWeDo.hero.desc')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Accordion type="single" collapsible className="w-full bg-white p-4 sm:p-8 rounded-xl shadow-lg">
              {activities.map((activity) => (
                <AccordionItem value={activity.value} key={activity.value}>
                  <AccordionTrigger className="text-lg sm:text-xl font-semibold text-stone-800 hover:text-emerald-700">
                    <div className="flex items-center gap-4">
                      <activity.icon className="w-7 h-7 text-emerald-600 flex-shrink-0" />
                      <span data-editable="true">{activity.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-11">
                    <p data-editable="true" className="text-stone-600 mb-6">{activity.description}</p>
                    {activity.subsections && (
                      <div className="space-y-4">
                        {activity.subsections.map((sub, index) => (
                           <div key={index} className="flex items-start gap-4 p-4 bg-stone-50 rounded-lg">
                            <sub.icon className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-1" />
                            <div>
                               <h4 data-editable="true" className="font-semibold text-stone-800">{sub.title}</h4>
                               <p data-editable="true" className="text-stone-600">{sub.content}</p>
                            </div>
                         </div>
                        ))}
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Social Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
            >
              <img 
                src="https://horizons-cdn.hostinger.com/93e67a24-0ceb-4a59-803a-24d384172953/e9d61a859c57389d489f4f398b4bec01.jpg" 
                alt="Group photo of children in school uniforms representing social impact and community engagement"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-emerald-900/10 hover:bg-transparent transition-colors duration-300" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 text-emerald-700 font-bold uppercase tracking-wider text-sm">
                <Users className="w-5 h-5" />
                <span>{t('whatWeDo.impact.tag')}</span>
              </div>
              <h2 data-editable="true" className="text-3xl md:text-4xl font-bold text-stone-900 leading-tight">
                {t('whatWeDo.impact.title')}
              </h2>
              <p data-editable="true" className="text-lg text-stone-600 leading-relaxed">
                {t('whatWeDo.impact.desc')}
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                  <div className="text-2xl font-bold text-emerald-800">{t('whatWeDo.impact.stats.jobs.value')}</div>
                  <div className="text-sm text-emerald-600 font-medium">{t('whatWeDo.impact.stats.jobs.label')}</div>
                </div>
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                  <div className="text-2xl font-bold text-emerald-800">{t('whatWeDo.impact.stats.students.value')}</div>
                  <div className="text-sm text-emerald-600 font-medium">{t('whatWeDo.impact.stats.students.label')}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-emerald-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
            <h2 data-editable="true" className="text-3xl md:text-4xl font-bold mb-6">{t('whatWeDo.integration.title')}</h2>
            <p data-editable="true" className="text-lg text-emerald-100 leading-relaxed mb-8">
              {t('whatWeDo.integration.desc')}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
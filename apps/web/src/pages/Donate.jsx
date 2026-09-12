import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Sprout, Users, Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';

const Donate = () => {
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleDonateClick = () => {
    toast({
      title: t('donate.redirect.title'),
      description: t('donate.redirect.desc'),
    });
  };

  const impactAreas = [
    {
      icon: Sprout,
      title: t('donate.impact.areas.expand.title'),
      description: t('donate.impact.areas.expand.desc'),
      amount: t('donate.impact.areas.expand.amount')
    },
    {
      icon: Users,
      title: t('donate.impact.areas.train.title'),
      description: t('donate.impact.areas.train.desc'),
      amount: t('donate.impact.areas.train.amount')
    },
    {
      icon: Award,
      title: t('donate.impact.areas.infrastructure.title'),
      description: t('donate.impact.areas.infrastructure.desc'),
      amount: t('donate.impact.areas.infrastructure.amount')
    }
  ];

  const donationTiers = [
    {
      amount: t('donate.tiers.items.supporter.amount'),
      title: t('donate.tiers.items.supporter.title'),
      benefits: [
        t('donate.tiers.items.supporter.b1'),
        t('donate.tiers.items.supporter.b2'),
        t('donate.tiers.items.supporter.b3')
      ]
    },
    {
      amount: t('donate.tiers.items.champion.amount'),
      title: t('donate.tiers.items.champion.title'),
      benefits: [
        t('donate.tiers.items.champion.b1'),
        t('donate.tiers.items.champion.b2'),
        t('donate.tiers.items.champion.b3'),
        t('donate.tiers.items.champion.b4')
      ],
      featured: true
    },
    {
      amount: t('donate.tiers.items.partner.amount'),
      title: t('donate.tiers.items.partner.title'),
      benefits: [
        t('donate.tiers.items.partner.b1'),
        t('donate.tiers.items.partner.b2'),
        t('donate.tiers.items.partner.b3'),
        t('donate.tiers.items.partner.b4'),
        t('donate.tiers.items.partner.b5')
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('donate.title')}</title>
        <meta name="description" content={t('donate.meta')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-800 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Heart className="w-16 h-16 text-emerald-300 mx-auto mb-6" />
            <h1 data-editable="true" className="text-4xl md:text-5xl font-bold mb-6">{t('donate.hero.title')}</h1>
            <p data-editable="true" className="text-xl text-emerald-100 mb-8">
              {t('donate.hero.desc')}
            </p>
            <Button 
              size="lg" 
              onClick={handleDonateClick}
              className="bg-white text-emerald-900 hover:bg-emerald-50 text-lg px-8 py-6 h-auto"
            >
              <span data-editable="true">{t('donate.hero.btn')}</span>
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 data-editable="true" className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              {t('donate.impact.title')}
            </h2>
            <p data-editable="true" className="text-lg text-stone-600 max-w-2xl mx-auto">
              {t('donate.impact.desc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-stone-50 p-8 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <area.icon className="w-7 h-7 text-emerald-700" />
                </div>
                <div data-editable="true" className="text-emerald-600 font-bold text-2xl mb-2">{area.amount}</div>
                <h3 data-editable="true" className="text-xl font-semibold text-stone-800 mb-3">
                  {area.title}
                </h3>
                <p data-editable="true" className="text-stone-600 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 data-editable="true" className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              {t('donate.tiers.title')}
            </h2>
            <p data-editable="true" className="text-lg text-stone-600 max-w-2xl mx-auto">
              {t('donate.tiers.desc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {donationTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-lg overflow-hidden ${
                  tier.featured 
                    ? 'shadow-xl border-2 border-emerald-500 transform md:scale-105' 
                    : 'shadow-md'
                }`}
              >
                {tier.featured && (
                  <div data-editable="true" className="bg-emerald-600 text-white text-center py-2 text-sm font-semibold">
                    {t('donate.tiers.popular')}
                  </div>
                )}
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div data-editable="true" className="text-4xl font-bold text-emerald-700 mb-2">{tier.amount}</div>
                    <div data-editable="true" className="text-xl font-semibold text-stone-800">{tier.title}</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-stone-600">
                        <Heart className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                        <span data-editable="true" className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={handleDonateClick}
                    className={`w-full ${
                      tier.featured 
                        ? 'bg-emerald-600 hover:bg-emerald-700' 
                        : 'bg-stone-700 hover:bg-stone-800'
                    }`}
                  >
                    <span data-editable="true">{t('donate.tiers.btnPrefix')} {tier.amount}</span>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 data-editable="true" className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">
                {t('donate.why.title')}
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p data-editable="true">
                  {t('donate.why.desc1')}
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span data-editable="true">{t('donate.why.l1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span data-editable="true">{t('donate.why.l2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span data-editable="true">{t('donate.why.l3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span data-editable="true">{t('donate.why.l4')}</span>
                  </li>
                </ul>
                <p data-editable="true">
                  {t('donate.why.desc2')}
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                alt={t('donate.why.imageAlt')} 
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1613404165010-cf1291c545b1" 
               />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 bg-emerald-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 data-editable="true" className="text-3xl md:text-4xl font-bold mb-6">
              {t('donate.other.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-emerald-700 p-6 rounded-lg">
                <h3 data-editable="true" className="font-semibold text-lg mb-2">{t('donate.other.items.volunteer.title')}</h3>
                <p data-editable="true" className="text-emerald-100 text-sm">
                  {t('donate.other.items.volunteer.desc')}
                </p>
              </div>
              <div className="bg-emerald-700 p-6 rounded-lg">
                <h3 data-editable="true" className="font-semibold text-lg mb-2">{t('donate.other.items.partner.title')}</h3>
                <p data-editable="true" className="text-emerald-100 text-sm">
                  {t('donate.other.items.partner.desc')}
                </p>
              </div>
              <div className="bg-emerald-700 p-6 rounded-lg">
                <h3 data-editable="true" className="font-semibold text-lg mb-2">{t('donate.other.items.spread.title')}</h3>
                <p data-editable="true" className="text-emerald-100 text-sm">
                  {t('donate.other.items.spread.desc')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Donate;
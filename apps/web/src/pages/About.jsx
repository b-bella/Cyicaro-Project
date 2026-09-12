import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Leaf, 
  Users, 
  MapPin, 
  ShieldCheck, 
  RefreshCw,
  Sprout,
  HeartHandshake,
  TrendingUp,
  ChevronDown,
  CheckCircle2
} from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const problemIcons = [MapPin, Users, TrendingUp, ShieldCheck];
  const solutionIcons = [HeartHandshake, Sprout, TrendingUp];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-background min-h-screen">
      <Helmet>
        <title>{t('about.title')}</title>
        <meta name="description" content={t('about.meta')} />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1703835186839-0a42735e656e" 
            alt="Cyicaro Farm aerial view" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <motion.span variants={fadeUp} className="inline-block py-1 px-4 rounded-full bg-white/20 text-white text-sm font-semibold tracking-wider mb-6 border border-white/30 backdrop-blur-sm">
              CYICARO FARM
            </motion.span>
            <motion.h1 variants={fadeUp} data-editable="true" className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              {t('about.hero.title')}
            </motion.h1>
            <motion.p variants={fadeUp} data-editable="true" className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
              {t('about.hero.subtitle')}
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-full font-bold shadow-xl">
                <span data-editable="true">{t('about.hero.cta')}</span> <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70"
        >
          <span className="text-sm font-medium mb-2 uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="section-padding bg-background relative z-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 data-editable="true" className="text-3xl md:text-4xl font-bold text-primary mb-6">
              {t('about.problem.title')}
            </h2>
            <p data-editable="true" className="text-lg text-muted-foreground">
              {t('about.problem.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((num, index) => {
              const Icon = problemIcons[index];
              return (
                <motion.div
                  key={`p${num}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-t-4 border-t-primary shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 data-editable="true" className="text-xl font-bold mb-3">
                        {t(`about.problem.cards.p${num}.title`)}
                      </h3>
                      <p data-editable="true" className="text-muted-foreground">
                        {t(`about.problem.cards.p${num}.desc`)}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CIRCULAR APPROACH SECTION */}
      <section className="section-padding relative overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1609817482644-052ea16fd6d7" 
            alt="Circular farming" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-secondary/95" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <RefreshCw className="w-16 h-16 mx-auto mb-6 text-accent animate-[spin_10s_linear_infinite]" />
            <h2 data-editable="true" className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {t('about.circular.title')}
            </h2>
            <h3 data-editable="true" className="text-2xl font-semibold text-accent mb-8">
              {t('about.circular.subtitle')}
            </h3>
            <p data-editable="true" className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto bg-black/20 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              {t('about.circular.desc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 data-editable="true" className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
            {t('about.solutions.title')}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {['societal', 'environmental', 'economic'].map((pillar, index) => {
              const Icon = solutionIcons[index];
              return (
                <motion.div
                  key={pillar}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="h-full bg-card border-none shadow-xl overflow-hidden group">
                    <div className="h-2 w-full bg-gradient-to-r from-primary to-secondary" />
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                          <Icon className="w-8 h-8" />
                        </div>
                        <h3 data-editable="true" className="text-2xl font-bold">
                          {t(`about.solutions.pillars.${pillar}.title`)}
                        </h3>
                      </div>
                      <ul className="space-y-4">
                        {[0, 1, 2, 3].map((itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span data-editable="true" className="text-muted-foreground">
                              {t(`about.solutions.pillars.${pillar}.items.${itemIndex}`)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="section-padding relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1681834913206-cea9d3ec04d6" 
            alt="Farm landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-sm" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 data-editable="true" className="text-3xl md:text-5xl font-bold text-primary mb-4">
              {t('about.mission.title')}
            </h2>
            <p data-editable="true" className="text-xl font-semibold text-foreground">
              {t('about.mission.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <motion.div
                key={`m${num}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-background/80 backdrop-blur border border-primary/20 p-6 rounded-2xl flex items-start gap-4 shadow-sm hover:shadow-md hover:border-primary/50 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {num}
                </div>
                <p data-editable="true" className="text-foreground font-medium leading-relaxed mt-1">
                  {t(`about.mission.items.m${num}`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FUNDING NEEDS SECTION */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 data-editable="true" className="text-3xl md:text-4xl font-bold mb-4">
              {t('about.funding.title')}
            </h2>
            <p data-editable="true" className="text-xl text-primary-foreground/80">
              {t('about.funding.desc')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[1, 2, 3, 4, 5].map((num, index) => (
              <motion.div
                key={`f${num}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 border border-white/20 p-6 rounded-2xl backdrop-blur-md"
              >
                <h3 data-editable="true" className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-accent" />
                  {t(`about.funding.items.f${num}.title`)}
                </h3>
                <p data-editable="true" className="text-primary-foreground/90 pl-7">
                  {t(`about.funding.items.f${num}.desc`)}
                </p>
              </motion.div>
            ))}
            
            <div className="mt-8 text-center p-6 bg-accent/20 border border-accent/30 rounded-2xl">
              <p data-editable="true" className="font-semibold text-lg text-accent-foreground dark:text-accent">
                {t('about.funding.benefit')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NOW & CTA */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 data-editable="true" className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('about.whyNow.title')}
            </h2>
            <p data-editable="true" className="text-lg text-muted-foreground leading-relaxed">
              {t('about.whyNow.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="p-6">
              <div className="text-4xl font-black text-primary mb-2">50+</div>
              <div data-editable="true" className="text-sm font-semibold text-muted-foreground uppercase">{t('about.metrics.jobs')}</div>
            </div>
            <div className="p-6 border-y md:border-y-0 md:border-x border-border">
              <div className="text-4xl font-black text-primary mb-2">8</div>
              <div data-editable="true" className="text-sm font-semibold text-muted-foreground uppercase">{t('about.metrics.hectares')}</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-black text-primary mb-2">200+</div>
              <div data-editable="true" className="text-sm font-semibold text-muted-foreground uppercase">{t('about.metrics.students')}</div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-secondary/20 rounded-3xl p-12 border border-secondary/30 max-w-4xl mx-auto"
          >
            <h2 data-editable="true" className="text-3xl font-bold mb-4">
              {t('about.cta.title')}
            </h2>
            <p data-editable="true" className="text-lg text-muted-foreground mb-8">
              {t('about.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8" asChild>
                <Link to="/donate"><span data-editable="true">{t('about.cta.btnDonate')}</span></Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-primary text-primary hover:bg-primary/5" asChild>
                <Link to="/contact"><span data-editable="true">{t('about.cta.btnContact')}</span></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
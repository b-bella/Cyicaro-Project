import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Leaf, Droplets, Trees, Sprout, Heart, Wheat, Sun, Shield, Mountain, Bird, ArrowRight, X } from 'lucide-react';
import IntegrationPowerSection from '@/components/IntegrationPowerSection';

const NosActivites = () => {
  const { t } = useTranslation();
  const [selectedActivity, setSelectedActivity] = useState(null);

  const images = [
    "https://images.unsplash.com/photo-1640124095791-2200e9cd372c", // Macadamia
    "https://images.unsplash.com/photo-1663741931138-3987260a81f7", // Livestock & Water
    "https://images.unsplash.com/photo-1700768352732-b98db1c34cea", // Citrus
    "https://images.unsplash.com/photo-1630542382126-07fe9b8817f1", // Bananas
    "https://images.unsplash.com/photo-1647097169981-c7d55c93a544", // Animal Husbandry
    "https://images.unsplash.com/photo-1602163038052-ca21112024d2", // Composting
    "https://images.unsplash.com/photo-1620895560558-1856efd75eb8", // Forage
    "https://images.unsplash.com/photo-1696240705118-838032e509e6", // Forestry
    "https://images.unsplash.com/photo-1613404165010-cf1291c545b1", // Social Impact
    "https://images.unsplash.com/photo-1511846859610-ea7712ac1c3d"  // Innovative Crops
  ];

  const icons = [Leaf, Droplets, Sun, Wheat, Bird, Sprout, Trees, Mountain, Heart, Shield];

  // Organize the 10 activities into 3 categories
  const mappedActivities = images.map((img, index) => ({
    id: index,
    image: img,
    icon: icons[index],
    title: t(`activitiesPage.items.${index}.title`),
    short: t(`activitiesPage.items.${index}.short`),
    full: t(`activitiesPage.items.${index}.full`),
    category: index < 4 ? 'agriculture' : index < 6 ? 'livestock' : 'ecosystem'
  }));

  const categories = [
    { id: 'agriculture', title: t('activitiesPage.categories.agriculture'), color: 'from-emerald-600 to-emerald-400' },
    { id: 'livestock', title: t('activitiesPage.categories.livestock'), color: 'from-amber-600 to-yellow-500' },
    { id: 'ecosystem', title: t('activitiesPage.categories.ecosystem'), color: 'from-teal-700 to-emerald-800' }
  ];

  return (
    <div className="bg-background min-h-screen">
      <Helmet>
        <title>{t('activitiesPage.title')} - {t('nav.brandName')}</title>
        <meta name="description" content={t('activitiesPage.subtitle')} />
      </Helmet>

      {/* ENHANCED HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1592982537447-6f2a6a0a0fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Farm landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/80 to-emerald-900/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-100 border border-emerald-500/30 text-sm font-semibold uppercase tracking-wider mb-6">
              <Leaf className="w-4 h-4" /> Cyicaro Farm
            </span>
            <h1 data-editable="true" className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {t('activitiesPage.title')}
            </h1>
            <p data-editable="true" className="text-xl md:text-2xl text-emerald-50 mb-10 leading-relaxed font-light">
              {t('activitiesPage.subtitle')}
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* INTEGRATION SECTION */}
      <div className="relative z-20 -mt-12 mb-16 container mx-auto px-4">
        <IntegrationPowerSection />
      </div>

      {/* CATEGORIZED ACTIVITIES SHOWCASE */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          
          {categories.map((cat, catIndex) => (
            <div key={cat.id} className="mb-24 last:mb-0">
              {/* Category Header */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex items-center gap-6 mb-12"
              >
                <div className={`w-16 h-2 bg-gradient-to-r ${cat.color} rounded-full`} />
                <h2 data-editable="true" className="text-3xl md:text-4xl font-bold text-foreground">
                  {cat.title}
                </h2>
              </motion.div>

              {/* Enhanced Masonry/Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {mappedActivities.filter(a => a.category === cat.id).map((activity, index) => {
                  const Icon = activity.icon;
                  // Alternating layout sizes for visual interest
                  const isLarge = index === 0 && mappedActivities.filter(a => a.category === cat.id).length > 2;
                  
                  return (
                    <motion.div 
                      key={activity.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.1 }}
                      className={`${isLarge ? 'md:col-span-2' : ''}`}
                    >
                      <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 h-full bg-card flex flex-col">
                        <div className={`relative overflow-hidden ${isLarge ? 'h-[400px]' : 'h-64'}`}>
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                          <img 
                            src={activity.image} 
                            alt={activity.title} 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute top-4 left-4 z-20">
                            <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur shadow-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                              <Icon className="w-6 h-6" />
                            </div>
                          </div>
                        </div>
                        
                        <CardContent className="p-8 flex flex-col flex-grow">
                          <h3 data-editable="true" className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                            {activity.title}
                          </h3>
                          <p data-editable="true" className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                            {activity.short}
                          </p>
                          <Button 
                            variant="ghost" 
                            className="self-start text-primary hover:text-primary hover:bg-primary/10 group-hover:translate-x-2 transition-transform"
                            onClick={() => setSelectedActivity(activity)}
                          >
                            <span data-editable="true">{t('activitiesPage.btnLearnMore')}</span>
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* FULL SCREEN MODAL */}
      <AnimatePresence>
        {selectedActivity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedActivity(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-background rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
            >
              <div className="relative h-64 sm:h-80 shrink-0">
                <img 
                  src={selectedActivity.image} 
                  alt={selectedActivity.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <Button 
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md border border-white/30"
                  onClick={() => setSelectedActivity(null)}
                >
                  <X className="w-5 h-5" />
                </Button>
                
                <div className="absolute bottom-6 left-8 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary shadow-lg flex items-center justify-center text-primary-foreground">
                    <selectedActivity.icon className="w-7 h-7" />
                  </div>
                  <h2 data-editable="true" className="text-3xl sm:text-4xl font-bold text-foreground drop-shadow-md">
                    {selectedActivity.title}
                  </h2>
                </div>
              </div>
              
              <div className="p-8 sm:p-10 overflow-y-auto">
                <p data-editable="true" className="text-xl text-muted-foreground leading-relaxed">
                  {selectedActivity.full}
                </p>
                
                <div className="mt-10 flex justify-end">
                  <Button 
                    size="lg" 
                    onClick={() => setSelectedActivity(null)}
                    className="rounded-full px-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  >
                    <span data-editable="true">{t('activitiesPage.btnClose')}</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NosActivites;
import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Leaf, Edit3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { EditContext } from '@/contexts/EditContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const { isEditMode, setIsEditMode } = useContext(EditContext);

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.whatWeDo'), path: '/what-we-do' },
    { name: t('nav.nosActivites'), path: '/nos-activites' },
    { name: t('nav.donate'), path: '/donate' }
  ];

  const isActive = (path) => location.pathname === path;
  const currentLang = i18n.language || 'en';

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-emerald-600 p-2.5 rounded-xl group-hover:bg-emerald-700 transition-colors shadow-sm">
              <Leaf className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span data-editable="true" className="text-2xl font-black text-emerald-800 tracking-tight leading-none">
                {t('nav.brandName')}
              </span>
              <p data-editable="true" className="text-sm font-medium text-emerald-600 mt-0.5">
                {t('home.hero.subtitle')}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                data-editable="true"
                className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                  isActive(item.path) ? 'text-emerald-600' : 'text-stone-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-4">
              {/* Edit Toggle */}
              <button
                onClick={() => setIsEditMode(!isEditMode)}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-bold rounded-md transition-all border ${
                  isEditMode
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300 shadow-inner'
                    : 'bg-white text-stone-600 border-stone-200 hover:text-emerald-600 hover:bg-stone-50'
                }`}
                title="Toggle Edit Mode"
              >
                <Edit3 className="w-3.5 h-3.5" />
                {isEditMode ? 'Editing...' : 'Edit Content'}
              </button>

              {/* Language Switcher */}
              <div className="flex items-center bg-stone-100 p-1 rounded-lg border border-stone-200">
                <button
                  onClick={() => i18n.changeLanguage('en')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                    currentLang.startsWith('en') 
                      ? 'bg-white text-emerald-700 shadow-sm' 
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => i18n.changeLanguage('fr')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                    currentLang.startsWith('fr') 
                      ? 'bg-white text-emerald-700 shadow-sm' 
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  FR
                </button>
              </div>

              <Link to="/donate">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <span data-editable="true">{t('nav.supportUs')}</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsEditMode(!isEditMode)}
              className={`p-1.5 rounded-md border ${
                isEditMode
                  ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                  : 'bg-white text-stone-600 border-stone-200'
              }`}
            >
              <Edit3 className="w-4 h-4" />
            </button>

            <div className="flex items-center bg-stone-100 p-1 rounded-lg border border-stone-200">
              <button
                onClick={() => i18n.changeLanguage('en')}
                className={`px-2 py-1 text-xs font-bold rounded-md transition-all ${
                  currentLang.startsWith('en') 
                    ? 'bg-white text-emerald-700 shadow-sm' 
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => i18n.changeLanguage('fr')}
                className={`px-2 py-1 text-xs font-bold rounded-md transition-all ${
                  currentLang.startsWith('fr') 
                    ? 'bg-white text-emerald-700 shadow-sm' 
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                FR
              </button>
            </div>
            
            <button
              className="p-2 text-stone-700 hover:text-emerald-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4 border-t border-stone-200 pt-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                data-editable="true"
                className={`block py-2 text-sm font-medium transition-colors hover:text-emerald-600 ${
                  isActive(item.path) ? 'text-emerald-600' : 'text-stone-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/donate" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white">
                <span data-editable="true">{t('nav.supportUs')}</span>
              </Button>
            </Link>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
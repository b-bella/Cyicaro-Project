import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-stone-800 text-stone-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span data-editable="true" className="text-lg font-bold text-white">
                {t('footer.brandName')}
              </span>
            </div>
            <p data-editable="true" className="text-sm text-stone-400 italic">
              {t('footer.subtitle')}
            </p>
            <p data-editable="true" className="text-sm text-stone-300">
              {t('footer.desc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span data-editable="true" className="font-semibold text-white block mb-4">
              {t('footer.quickLinks')}
            </span>
            <nav className="space-y-2">
              <Link data-editable="true" to="/" className="block text-sm hover:text-emerald-400 transition-colors">
                {t('nav.home')}
              </Link>
              <Link data-editable="true" to="/about" className="block text-sm hover:text-emerald-400 transition-colors">
                {t('nav.about')}
              </Link>
              <Link data-editable="true" to="/what-we-do" className="block text-sm hover:text-emerald-400 transition-colors">
                {t('nav.whatWeDo')}
              </Link>
              <Link data-editable="true" to="/donate" className="block text-sm hover:text-emerald-400 transition-colors">
                {t('nav.donate')}
              </Link>
            </nav>
          </div>

          {/* What We Do */}
          <div>
            <span data-editable="true" className="font-semibold text-white block mb-4">
              {t('footer.areasOfAction')}
            </span>
            <nav className="space-y-2">
              <p data-editable="true" className="text-sm hover:text-emerald-400 transition-colors cursor-pointer">
                {t('footer.actions.agri')}
              </p>
              <p data-editable="true" className="text-sm hover:text-emerald-400 transition-colors cursor-pointer">
                {t('footer.actions.live')}
              </p>
              <p data-editable="true" className="text-sm hover:text-emerald-400 transition-colors cursor-pointer">
                {t('footer.actions.comp')}
              </p>
              <p data-editable="true" className="text-sm hover:text-emerald-400 transition-colors cursor-pointer">
                {t('footer.actions.forage')}
              </p>
              <p data-editable="true" className="text-sm hover:text-emerald-400 transition-colors cursor-pointer">
                {t('footer.actions.social')}
              </p>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <span data-editable="true" className="font-semibold text-white block mb-4">
              {t('footer.contact')}
            </span>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <p data-editable="true" className="text-sm">
                  {t('footer.address')}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <p data-editable="true" className="text-sm">
                  {t('footer.email')}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <p data-editable="true" className="text-sm">
                  {t('footer.phone')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-8 pt-8 text-center">
          <p data-editable="true" className="text-sm text-stone-400">
            © {new Date().getFullYear()} {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
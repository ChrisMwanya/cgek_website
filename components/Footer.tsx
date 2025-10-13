import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ExternalLink , Facebook, Linkedin, Youtube, Instagram, X} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-700 font-bold text-xl">C</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">CGEK</h3>
                <p className="text-blue-200">Clinique Gastro-Entérologique de Kinshasa</p>
              </div>
            </div>
            <p className="text-blue-100 mb-4 max-w-md">
              Votre santé digestive est notre priorité. Nous offrons des soins spécialisés 
              de qualité avec une équipe médicale expérimentée et des équipements modernes.
            </p>
            
            {/* Réseaux sociaux */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-white mb-3">Suivez-nous</h5>
              <div className="flex space-x-4">
                <Link 
                  href="https://facebook.com/cgek.kinshasa" 
                  className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-4 h-4 text-white" />
                </Link>
                <Link 
                  href="https://x.com/cgekkinshasa" 
                  className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <X className="w-4 h-4 text-white" />
                </Link>
                <Link 
                  href="https://instagram.com/cgek.kinshasa" 
                  className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </Link>
                <Link 
                  href="https://linkedin.com/company/cgek" 
                  className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </Link>
                <Link 
                  href="https://youtube.com/@cgekkinshasa" 
                  className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-blue-100 hover:text-white transition-colors">À propos</Link></li>
              <li><Link href="/services" className="text-blue-100 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/appointment" className="text-blue-100 hover:text-white transition-colors">Prendre RDV</Link></li>
              <li><Link href="/contact" className="text-blue-100 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <div className="text-blue-100 text-sm">
                  <Link 
                    href="https://maps.google.com/?q=Boulevard+Lumumba+N°05+Q+Immo-Congo+C+Limete+Kinshasa+RDC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    <p>Boulevard Lumumba, N°05</p>
                    <p>Q/ Immo-Congo, C/ Limete</p>
                    <p>Kinshasa, RDC</p>
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-300" />
                <Link 
                  href="tel:+243999981735"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  +243 999 981 735
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-300" />
                <span className="text-blue-100 text-sm">Lun-Ven: 7h-18h, Sam-Dim: 8h-14h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-blue-200 text-sm">
                © 2024 CGEK - Clinique Gastro-Entérologique de Kinshasa. Tous droits réservés.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-blue-300 text-sm flex items-center justify-center md:justify-end space-x-2">
                <span>Powered by</span>
                <Link 
                  href="https://chaz-lune.org" 
                  className="text-white font-semibold hover:text-blue-100 transition-colors flex items-center space-x-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Chaz-Lune ASBL</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </p>
              <p className="text-blue-400 text-xs mt-1">
                Organisation à but non lucratif pour la santé
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
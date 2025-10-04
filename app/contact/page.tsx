import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  Navigation,
  Building
} from 'lucide-react';

const contactInfo = [
  {
    title: 'Adresse',
    icon: MapPin,
    color: 'text-blue-600',
    details: [
      'Boulevard Lumumba, N°05',
      'Q/ Immo-Congo, C/ Limete',
      'Kinshasa, République Démocratique du Congo'
    ],
    action: null
  },
  {
    title: 'Téléphone',
    icon: Phone,
    color: 'text-green-600',
    details: ['+243 999 981 735'],
    action: {
      text: 'Appeler maintenant',
      href: 'tel:+243999981735'
    }
  },
  {
    title: 'Email',
    icon: Mail,
    color: 'text-purple-600',
    details: ['contact@cgek.cd', 'info@cgek.cd'],
    action: {
      text: 'Envoyer un email',
      href: 'mailto:contact@cgek.cd'
    }
  },
  {
    title: 'Horaires d\'ouverture',
    icon: Clock,
    color: 'text-orange-600',
    details: [
      'Lundi - Vendredi : 7h00 - 18h00',
      'Samedi - Dimanche : 8h00 - 14h00',
      
    ],
    action: null
  }
];

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nous
              <span className="text-blue-600"> Contacter</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Notre équipe est à votre disposition pour répondre à toutes vos questions 
              et vous accompagner dans vos besoins de santé.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/appointment">
                  <Calendar className="w-5 h-5 mr-2" />
                  Prendre rendez-vous
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-red-500 text-red-600 hover:bg-red-50">
                <Link href="tel:+243999981735">
                  <Phone className="w-5 h-5 mr-2" />
                  Urgence
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className={`w-8 h-8 ${info.color}`} />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm leading-relaxed">
                      {detail}
                    </p>
                  ))}
                  
                  {info.action && (
                    <Button asChild variant="outline" size="sm" className="mt-4">
                      <Link href={info.action.href}>
                        {info.action.text}
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Notre Localisation
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  La CGEK est stratégiquement située au Boulevard Lumumba dans la commune 
                  de Limete, facilement accessible depuis tous les quartiers de Kinshasa.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Building className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Adresse complète</h3>
                    <p className="text-gray-600">
                      Boulevard Lumumba, N°05<br />
                      Quartier Immo-Congo<br />
                      Commune de Limete<br />
                      Kinshasa, République Démocratique du Congo
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Navigation className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Coordonnées GPS</h3>
                    <p className="text-gray-600 font-mono text-sm">
                      Latitude: -4.3351998°<br />
                      Longitude: 15.3262024°
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      Précision: ±5 mètres (Vérifiée Google Maps)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Navigation className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Point de repère</h3>
                    <p className="text-gray-600">
                      Station de service Sonaydro (1ère rue)<br />
                      En face de l&apos;église Cité Bethel<br />
                      Proche de Kin marché Limete
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">
                    Informations géospatiales
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <p className="text-blue-800"><strong>Coordonnées WGS84:</strong></p>
                      <p className="text-blue-700 font-mono">-4.3351998°, 15.3262024°</p>
                      <p className="text-blue-800"><strong>Zone UTM:</strong> 33S</p>
                      <p className="text-blue-800"><strong>Altitude:</strong> ~320m</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-blue-800"><strong>Commune:</strong> Limete</p>
                      <p className="text-blue-800"><strong>Quartier:</strong> Immo-Congo</p>
                      <p className="text-blue-800"><strong>Province:</strong> Kinshasa</p>
                      <p className="text-blue-800"><strong>Pays:</strong> République Démocratique du Congo</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">
                    Comment nous trouver ?
                  </h3>
                  <ul className="text-green-800 space-y-2 text-sm">
                    <li>• Depuis le centre-ville : Prendre le Boulevard Lumumba direction Limete</li>
                    <li>• Transport en commun : Arrêt &quot;Immo-Congo&quot; ou &quot;Station Sonaydro&quot;</li>
                    <li>• En taxi/voiture : Parking disponible devant la clinique</li>
                    <li>• GPS/Navigation : Utiliser les coordonnées -4.3351998, 15.3262024</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Google Maps Embed */}
              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.8247832!2d15.3262024!3d-4.3351998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a37ced017027d:0xfc0a4a714723c130!2sClinique%20Gastro-Ent%C3%A9rologique%20de%20Kinshasa!5e0!3m2!1sfr!2scd!4v1633435200000!5m2!1sfr!2scd&z=16"
                    width="100%"
                    height="300"
                    title="Localisation CGEK - Clinique Gastro-Entérologique de Kinshasa"
                    className="w-full h-72 border-0"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  
                  {/* Overlay with directions button */}
                  <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-3">
                    <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Link 
                        href="https://www.google.com/maps/dir/?api=1&destination=-4.3351998,15.3262024&destination_place_id=0x1a6a37ced017027d:0xfc0a4a714723c130"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        Itinéraire
                      </Link>
                    </Button>
                  </div>
                </div>
                
                {/* Map Info */}
                <div className="p-4 bg-gray-50 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">CGEK - Centre de Santé</h4>
                      <p className="text-sm text-gray-600">Boulevard Lumumba, N°05, Limete</p>
                      <p className="text-xs text-gray-500 font-mono mt-1">
                        GPS: -4.3351998°, 15.3262024°
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button asChild size="sm" variant="outline">
                        <Link 
                          href="https://www.google.com/maps/place/Clinique+Gastro-Ent%C3%A9rologique+de+Kinshasa/@-4.3351998,15.3262024,17z"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MapPin className="w-4 h-4 mr-1" />
                          Voir sur Maps
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Emergency Contact */}
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-700 flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Urgences 24/7
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-600 mb-4">
                    En cas d&apos;urgence médicale, n&apos;hésitez pas à nous contacter 
                    à tout moment.
                  </p>
                  <Button asChild className="bg-red-500 hover:bg-red-600 w-full">
                    <Link href="tel:+243999981735">
                      <Phone className="w-4 h-4 mr-2" />
                      Appeler : +243 999 981 735
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Une question ? Besoin d&apos;aide ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Notre équipe est là pour vous renseigner et vous accompagner 
              dans toutes vos démarches de santé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/appointment">
                  <Calendar className="w-5 h-5 mr-2" />
                  Prendre rendez-vous
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-600">
                <Link href="tel:+243999981735">
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler maintenant
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
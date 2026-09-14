import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Building, ShieldCheck, Users, Landmark, Award } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'Acheteur',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: 'Acheteur',
        message: ''
      });
    }, 1500);
  };

  const tradePartners = [
    { name: 'OLAM', role: 'Exportation & Négoce International', location: 'Port de San-Pedro' },
    { name: 'CARGILL', role: 'Transformation Industrielle & Broyage', location: 'Zone Industrielle' },
    { name: 'Conseil du Café-Cacao', role: 'Régulateur National & Agréments', location: 'Abidjan / San-Pedro' },
    { name: 'Rainforest Alliance', role: 'Certification de Durabilité', location: 'Programme International' }
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-sans font-bold tracking-widest text-[#8E4D31] uppercase mb-2 block">
            Bâtissons des Partenariats Durables
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-[#5C3E35] leading-tight mb-4">
            Contact & Partenariats
          </h1>
          <p className="text-base font-sans text-[#5C544C] leading-relaxed">
            Vous souhaitez contractualiser des volumes de cacao d'origine certifiée, commander notre café robusta ou anacardes premium, ou visiter nos installations à Doba ? Contactez notre secrétariat général.
          </p>
        </div>

        {/* Contact info and Form grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20">
          
          {/* Left Column: Coordinates */}
          <div className="lg:col-span-5 bg-[#F2ECE4]/30 border border-[#EAE5DF] rounded-[24px] p-6 md:p-8 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <span className="text-xs font-sans font-bold tracking-widest text-[#8E4D31] uppercase">
                  Coordonnées Officielles
                </span>
                <h3 className="text-xl font-serif text-[#5C3E35] font-medium mt-1">
                  Coopérative MCOMMODITIES
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-9 h-9 rounded-full bg-[#00A14C]/10 flex items-center justify-center text-[#00A14C] flex-shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block text-xs font-sans text-[#7C7265] uppercase font-bold tracking-wider">Siège Social & Magasin</span>
                    <span className="block text-sm font-sans text-[#5C3E35] leading-relaxed">
                      Doba, Département de San-Pedro, Côte d'Ivoire
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-9 h-9 rounded-full bg-[#8E4D31]/10 flex items-center justify-center text-[#8E4D31] flex-shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block text-xs font-sans text-[#7C7265] uppercase font-bold tracking-wider">Courriel Général</span>
                    <a href="mailto:contact@mcommodities.ci" className="block text-sm font-sans text-[#00A14C] hover:underline">
                      contact@mcommodities.ci
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-9 h-9 rounded-full bg-[#C99A49]/15 flex items-center justify-center text-[#C99A49] flex-shrink-0">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block text-xs font-sans text-[#7C7265] uppercase font-bold tracking-wider">Téléphone CI (Bureau)</span>
                    <span className="block text-sm font-sans text-[#5C3E35]">
                      +225 07 00 70 70 16
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[#EAE5DF] space-y-3.5">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4.5 h-4.5 text-[#C99A49]" />
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#5C3E35]">
                  Garanties Exportateurs
                </span>
              </div>
              <p className="text-xs font-sans text-[#5C544C] leading-relaxed">
                Notre coopérative possède l'agrément d'exportateur officiel de matières premières agricoles en Côte d'Ivoire, en conformité totale avec le Conseil du Café-Cacao et la réglementation du commerce extérieur.
              </p>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7 bg-white border border-[#EAE5DF] rounded-[24px] p-6 md:p-8 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-sans font-bold text-[#5C3E35] uppercase tracking-wider">
                        Votre Nom complet *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Jean Koffi"
                        className="w-full bg-[#FAF8F5] text-sm text-[#5C3E35] font-sans border border-[#EAE5DF] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00A14C] focus:ring-1 focus:ring-[#00A14C]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-sans font-bold text-[#5C3E35] uppercase tracking-wider">
                        Adresse e-mail *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Ex: jean.koffi@entreprise.com"
                        className="w-full bg-[#FAF8F5] text-sm text-[#5C3E35] font-sans border border-[#EAE5DF] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00A14C] focus:ring-1 focus:ring-[#00A14C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-xs font-sans font-bold text-[#5C3E35] uppercase tracking-wider">
                        Entreprise / Organisation
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Ex: Chocolaterie Artisanale Paris"
                        className="w-full bg-[#FAF8F5] text-sm text-[#5C3E35] font-sans border border-[#EAE5DF] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00A14C] focus:ring-1 focus:ring-[#00A14C]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-xs font-sans font-bold text-[#5C3E35] uppercase tracking-wider">
                        Sujet de votre demande *
                      </label>
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-[#FAF8F5] text-sm text-[#5C3E35] font-sans border border-[#EAE5DF] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00A14C] focus:ring-1 focus:ring-[#00A14C] appearance-none"
                      >
                        <option value="Acheteur">Devenir Acheteur / Partenaire Commercial</option>
                        <option value="Producteur">Rejoindre la Coopérative (Producteur)</option>
                        <option value="Durabilite">Partenariat Agroforesterie & Carbone</option>
                        <option value="Autre">Autre demande générale</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-sans font-bold text-[#5C3E35] uppercase tracking-wider">
                      Votre Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez votre projet, vos volumes d'achats cibles ou vos questions..."
                      className="w-full bg-[#FAF8F5] text-sm text-[#5C3E35] font-sans border border-[#EAE5DF] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00A14C] focus:ring-1 focus:ring-[#00A14C] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2.5 cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}</span>
                    {!isSubmitting && <Send className="w-3.5 h-3.5 text-white" />}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-[#00A14C]/10 text-[#00A14C] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-[#00A14C]" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif text-[#5C3E35] font-medium">
                      Message Transmis avec Succès !
                    </h3>
                    <p className="text-sm font-sans text-[#5C544C] max-w-md mx-auto leading-relaxed">
                      Merci pour votre intérêt envers la coopérative MCOMMODITIES. Nos techniciens et responsables commerciaux basés à San-Pedro étudieront votre demande et vous recontacteront sous 48 heures.
                    </p>
                  </div>

                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-full border border-[#D32F2F] hover:bg-[#D32F2F]/5 text-[#D32F2F] text-xs font-sans font-bold tracking-widest uppercase transition-colors cursor-pointer"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Trade Partners Ecosystem Grid */}
        <div className="border-t border-[#EAE5DF] pt-16">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-sans font-bold tracking-widest text-[#8E4D31] uppercase mb-1.5 block">
              Confiance & Solidité Commerciale
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-[#5C3E35]">
              Notre Écosystème de Partenaires
            </h2>
            <p className="text-xs md:text-sm font-sans text-[#5C544C] mt-2">
              Nous collaborons activement avec les plus grands acteurs et régulateurs de la filière pour garantir des débouchés fiables et durables à nos membres.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tradePartners.map((p, idx) => (
              <div key={idx} className="bg-white border border-[#EAE5DF] rounded-2xl p-6 space-y-4 hover:shadow-sm transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#F2ECE4] flex items-center justify-center">
                  <Landmark className="w-5 h-5 text-[#8E4D31]" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-base text-[#5C3E35]">{p.name}</h4>
                  <p className="text-xs font-sans text-[#5C544C] font-semibold">{p.role}</p>
                  <p className="text-[10px] font-sans text-[#7C7265] uppercase tracking-wider">{p.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

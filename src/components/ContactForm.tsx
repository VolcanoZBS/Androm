// src/components/ContactForm.tsx
import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Mail } from 'lucide-react';

// Default Romanian translations — feel free to adjust or pull from your i18n setup
const translations = {
  contact: {
    title: 'Contactează-ne',
    getInTouch: 'Hai să discutăm',
    form: {
      name: 'Nume',
      email: 'Email',
      message: 'Mesaj',
      send: 'Trimite',
    },
  },
};

interface FormData {
  name: string;
  email: string;
  message: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate async send
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setShowModal(true);

      // Auto-hide after 5s
      setTimeout(() => {
        setStatus('idle');
        setShowModal(false);
      }, 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">
          {translations.contact.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact info */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
              {translations.contact.getInTouch}
            </h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center space-x-3 md:space-x-4">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                <span className="text-sm md:text-base">+40 (123) 456-789</span>
              </div>
              <div className="flex items-center space-x-3 md:space-x-4">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                <span className="text-sm md:text-base">contact@andromconstructii.ro</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={translations.contact.form.name}
              required
              className="w-full px-4 py-2 md:py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm md:text-base"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={translations.contact.form.email}
              required
              className="w-full px-4 py-2 md:py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm md:text-base"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={translations.contact.form.message}
              required
              rows={4}
              className="w-full px-4 py-2 md:py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm md:text-base"
            />

            <button
              type="submit"
              disabled={status === 'submitting'}
              className={`w-full bg-blue-600 text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded-lg transition text-sm md:text-base ${
                status === 'submitting'
                  ? 'opacity-75 cursor-not-allowed'
                  : 'hover:bg-blue-500'
              }`}
            >
              {status === 'submitting' ? 'Se trimite...' : translations.contact.form.send}
            </button>

            {status === 'error' && (
              <div className="mt-4 p-3 bg-red-600/20 border border-red-600 rounded-lg text-red-100 text-sm">
                A apărut o eroare. Vă rugăm să încercați din nou.
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="relative bg-white rounded-lg p-6 md:p-8 max-w-md w-full">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Mesaj Trimis cu Succes!
              </h3>
              <p className="text-gray-600">
                Vă mulțumim pentru mesaj. Vom reveni cu un răspuns în cel mai
                scurt timp posibil.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;

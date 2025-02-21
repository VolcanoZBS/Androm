import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { X, CheckCircle2 } from 'lucide-react';

// Initialize Supabase client
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface ContactFormProps {
  translations: {
    name: string;
    email: string;
    message: string;
    send: string;
  };
}

const ContactForm: React.FC<ContactFormProps> = ({ translations }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const { error } = await supabase
        .from('contact_requests')
        .insert([formData]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setShowModal(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setShowModal(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={translations.name}
            required
            className="w-full px-4 py-2 md:py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm md:text-base"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={translations.email}
            required
            className="w-full px-4 py-2 md:py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm md:text-base"
          />
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={translations.message}
            required
            rows={4}
            className="w-full px-4 py-2 md:py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm md:text-base"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className={`w-full bg-blue-600 text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded-lg transition text-sm md:text-base ${
            status === 'submitting' 
              ? 'opacity-75 cursor-not-allowed' 
              : 'hover:bg-blue-500'
          }`}
        >
          {status === 'submitting' ? 'Se trimite...' : translations.send}
        </button>

        {status === 'error' && (
          <div className="mt-4 p-3 bg-red-600/20 border border-red-600 rounded-lg text-red-100 text-sm">
            A apărut o eroare. Vă rugăm să încercați din nou.
          </div>
        )}
      </form>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="fixed inset-0 bg-black/50" onClick={() => setShowModal(false)}></div>
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
                Vă mulțumim pentru mesaj. Vom reveni cu un răspuns în cel mai scurt timp posibil.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
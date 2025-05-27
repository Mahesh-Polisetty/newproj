import { FormEvent, useState } from 'react';
import { Send, CheckCircle, XCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeaOgA9w0aqVtL05hoi8xZeaJJmrc2TDk-Ol_xHXpkyTbqzEg/formResponse';
    
    try {
      // Create form data
      const formData2 = new FormData();
      formData2.append('entry.2079140931', formData.name);
      formData2.append('entry.685018436', formData.email);
      formData2.append('entry.213672505', formData.phone);
      formData2.append('entry.1763927427', formData.subject);
      formData2.append('entry.340549944', formData.message);

      // Convert FormData to URLSearchParams
      const params = new URLSearchParams();
      for (const [key, value] of formData2.entries()) {
        params.append(key, value.toString());
      }

      // Submit the form
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
        },
        body: params.toString(),
      });

      // Also submit using a hidden form as backup
      const form = document.createElement('form');
      form.style.display = 'none';
      form.method = 'POST';
      form.action = formUrl;
      form.target = '_blank';

      // Add form fields
      Object.entries({
        'entry.2079140931': formData.name,
        'entry.685018436': formData.email,
        'entry.213672505': formData.phone,
        'entry.1763927427': formData.subject,
        'entry.340549944': formData.message
      }).forEach(([name, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset form status after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in <span className="text-teal-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Contact Form */}
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-700/50 order-2 md:order-1">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
                <p className="text-gray-400">Feel free to reach out for collaborations, opportunities, or just to say hello!</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-700/50 rounded-lg">
                    <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <p className="text-gray-400">pmbhupathibalu@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-700/50 rounded-lg">
                    <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Location</h4>
                    <p className="text-gray-400">Dallas, Texas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-700/50 rounded-lg">
                    <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Work</h4>
                    <div className="flex items-center gap-2">
                      <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </div>
                      <p className="text-gray-400">Available for opportunities</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="text-lg font-semibold text-white mb-4">Social Links</h4>
                <div className="flex space-x-4 mb-4">
                  <a href="https://www.linkedin.com/in/mahesh-polisetty-aa7a41146/" target="_blank" rel="noopener noreferrer" 
                    className="p-3 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors duration-300">
                    <svg className="w-6 h-6 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/Mahesh-Polisetty" target="_blank" rel="noopener noreferrer" 
                    className="p-3 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors duration-300">
                    <svg className="w-6 h-6 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
                <div className="mt-6 text-center">
                  <span className="text-sm text-gray-400">&copy; 2025 Mahesh Polisetty</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-700/50 order-1 md:order-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-sm text-gray-400 mb-4">Fields marked with <span className="text-red-500">*</span> are required</p>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg
                      focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent
                      text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg
                      focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent
                      text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone Number (Optional)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg
                      focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent
                      text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject *"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg
                      focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent
                      text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message *"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg
                      focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent
                      text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-white
                  transition-all duration-300 flex items-center justify-center space-x-2
                  ${formStatus === 'submitting' 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-teal-500 to-blue-500 hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.02]'}`}
              >
                {formStatus === 'submitting' && (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                {formStatus === 'idle' && <Send size={20} />}
                {formStatus === 'success' && <CheckCircle size={20} className="text-green-400" />}
                {formStatus === 'error' && <XCircle size={20} className="text-red-400" />}
                <span>
                  {formStatus === 'submitting' && 'Sending...'}
                  {formStatus === 'idle' && 'Send Message'}
                  {formStatus === 'success' && 'Message Sent!'}
                  {formStatus === 'error' && 'Try Again'}
                </span>
              </button>

              {/* Status Messages */}
              <div className="text-center text-sm transition-all duration-300">
                {formStatus === 'success' && (
                  <p className="text-green-400">Thanks for reaching out! I'll get back to you soon.</p>
                )}
                {formStatus === 'error' && (
                  <p className="text-red-400">Oops! Something went wrong. Please try again.</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-[100px] text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 C240,100 480,100 720,50 C960,0 1200,0 1440,100 L1440 100 L0 100 Z" />
        </svg>
      </div>
    </section>
  );
};

export default ContactSection;
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Replace this URL with your Google Apps Script deployment URL
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyYjp50uHcrmLa2eVRGVfA2m22jlUeq_bfiNaNXgLzvmerk9HZXhAFSNvFcGiQgYFeEeA/exec';
      
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Clear the form
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      alert('Thank you for your message! We will get back to you soon.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary">Get in Touch</h2>
          <p className="mt-4 text-xl text-white-600">Let's discuss your next project</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg text-white bg-primary hover:bg-primary-light transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="lg:pl-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-secondary-dark" />
                    <span className="ml-3 text-gray-600 hover:text-secondary-dark transition-colors">thirumalairk67@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-secondary-dark" />
                    <span className="ml-3 text-gray-600 hover:text-secondary-dark transition-colors">+91 9384125278</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-secondary-dark" />
                    <span className="ml-3 text-gray-600 hover:text-secondary-dark transition-colors">Coimbatore, TamilNadu, India</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white-900 mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/ThirumalaiRK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-secondary-dark transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="linkedin.com/in/thirumalai-r-k-a9523b292/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-secondary-dark transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                 
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-secondary-dark transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
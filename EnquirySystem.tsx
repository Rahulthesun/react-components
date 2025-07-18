import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactInfo {
  address: string;
  email: string;
  phone: string;
}

interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface EnquirySystemProps {
  contactInfo?: ContactInfo;
  onSubmit?: (data: EnquiryFormData) => void;
  emailJSConfig?: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
}

const EnquirySystem: React.FC<EnquirySystemProps> = ({
  contactInfo = {
    address: "4th Main Road, Nolambur, Chennai, India",
    email: "hello@mrgloss.com",
    phone: "+91 9940665596"
  },
  onSubmit,
  emailJSConfig = {
    serviceId: 'service_d8fagvh',
    templateId: 'template_v0t01ga',
    publicKey: 'kertkophtmzABcR7g'
  }
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const services = [
    'Ceramic Coating',
    'Paint Protection Film (PPF)',
    'Car Detailing',
    'Interior Protection',
    'Headlight Restoration',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Initialize EmailJS with your public key
      emailjs.init(emailJSConfig.publicKey);

      // Prepare template parameters
      const templateParams = {
        to_name: 'Mr. Gloss Team',
        from_name: formData.fullName,
        from_email: formData.email || 'No email provided',
        phone: formData.phone,
        service: formData.service || 'Not specified',
        message: formData.message,
        reply_to: formData.email || 'No email provided',
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        emailJSConfig.serviceId,
        emailJSConfig.templateId,
        templateParams
      );

      console.log('Email sent successfully:', result);

      // Call custom onSubmit if provided
      if (onSubmit) {
        onSubmit(formData);
      }

      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      }, 3000);

    } catch (err) {
      console.error('Error sending email:', err);
      setError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.fullName && formData.phone && formData.message;

  return (
    <section className="min-h-screen bg-[#001a00] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Get In <span className="text-green-400">Touch</span>
          </h1>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Ready to give your vehicle the premium protection it deserves? 
            Contact us today for a consultation and quote.
          </p>
        </div>

        <div className="gap-12 mx-auto w-9/10 md:w-1/2">

          {/* Enquiry Form */}
          <div className="bg-gray-900 rounded-2xl p-8 lg:p-12 border border-gray-800">
            <h2 className="text-3xl font-bold mb-8">Send us a <span className="text-green-400">message</span></h2>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-400 mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thank you for your enquiry. We'll get back to you soon.</p>
              </div>
            ) : (
              <>
                {error && (
                  <div className="bg-red-900/20 border border-red-500 rounded-lg p-4 mb-6 flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <p className="text-red-400">{error}</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Service Interested In</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Message </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquirySystem;
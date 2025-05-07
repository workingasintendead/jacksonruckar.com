'use client';

import { useState, ChangeEvent, FormEvent, useEffect } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  tentativeDate: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    tentativeDate: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [fadeOut, setFadeOut] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatusMessage('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('Message sent!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          tentativeDate: '',
          message: '',
        });
      } else {
        setStatusMessage('Failed to send. Try again later.');
      }
    } catch (error) {
      console.error(error);
      setStatusMessage('Error occurred while sending message.');
    }
  };

  useEffect(() => {
    if (statusMessage) {
      setFadeOut(false);
      const timer = setTimeout(() => {
        setFadeOut(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  const fields: Array<{
    label: string;
    name: keyof FormData;
    type: string;
  }> = [
    { label: 'Name', name: 'name', type: 'text' },
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'Phone', name: 'phone', type: 'tel' },
    { label: 'Tentative Date', name: 'tentativeDate', type: 'date' },
  ];

  return (
    <div className="min-h-screen px-4 pt-[100px] pb-10 bg-[#0a0a0a] text-white">
      <div className="max-w-2xl mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-6 text-center text-white">
          Contact
        </h1>

        {statusMessage && (
          <div
            className={`absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-sm text-orange-300 z-10 pt-25 w-full transition-opacity duration-500 ${
              fadeOut ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {statusMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {fields.map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="block mb-1 font-medium text-gray-300"
              >
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#111] border border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                required
              />
            </div>
          ))}

          <div>
            <label
              htmlFor="message"
              className="block mb-1 font-medium text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#111] border border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
              required
            />
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-[#111] hover:bg-[#1d1d1d] border border-gray-600 text-white font-semibold rounded transition cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

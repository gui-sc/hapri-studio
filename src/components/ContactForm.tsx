import React from 'react';

export function ContactForm() {
  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Nome
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 rounded-lg bg-gray-600 border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 rounded-lg bg-gray-600 border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          required
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Mensagem
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-gray-600 border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          required
        ></textarea>
      </div>
      
      <button
        type="submit"
        className="w-full bg-orange-400 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
      >
        Enviar Mensagem
      </button>
    </form>
  );
}
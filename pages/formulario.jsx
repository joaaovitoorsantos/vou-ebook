import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    celular: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://script.google.com/a/macros/grupovou.com.br/s/AKfycbzyUloRj5bordvnjEXT0qzWb47z7Ro-5mHbKVGP8PIE8UiMsMbmMRPfEarG8K0iJFBt5A/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData).toString()
      });
      const data = await response.json();
      if (data.result === 'success') {
        alert('Dados enviados com sucesso!');
      }
    } catch (error) {
      alert('Ocorreu um erro ao enviar os dados.');
    }
  };
  

  return (
    <div className="bg-gradient-to-br from-gray-800 to-black-900 flex flex-col justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="w-1/3">
      <img src="https://i.imgur.com/Hiz04ZN.png" alt="Logo" width={250} className="mx-auto mb-6" />
        <div className="mb-4">
          <label className="block mb-2">Nome</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Celular (WhatsApp)</label>
          <input
            type="celular"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black"
          />
        </div>
        <button type="submit" className="bg-black-500 text-white px-4 py-2 rounded">
          Enviar
        </button>
      </form>
    </div>
  );
}

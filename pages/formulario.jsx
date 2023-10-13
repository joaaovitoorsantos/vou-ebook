import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    nome: '',
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
      const response = await fetch('https://script.google.com/macros/s/AKfycbyEFaRju8TDuRoIR6mXOnlhqDm6PIpTMEmi_LL9oxtT/dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
      });
      const data = await response.json();
      if (data.result === 'success') {
        alert('Dados enviados com sucesso!');
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  
  return (
    <div className="bg-gradient-to-br from-gray-800 to-black-900 flex flex-col justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit}>
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
          <label className="block mb-2">Celular</label>
          <input
            type="text"
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

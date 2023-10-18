import { useState } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    celular: ''
  });

    // Função para validar os campos do formulário
    const validateForm = () => {
      for (let field in formData) {
        if (!formData[field].trim()) {
          alert(`Por favor, preencha o campo ${field}.`);
          return false;
        }
      }
      return true;
    };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await axios.post('/api/formulario', formData);  // Altere a URL para o caminho do seu endpoint
  
      if (response.data && response.data.id) {
        router.push('/sucesso')
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="bg-black to-black-900 flex flex-col justify-center items-center min-h-screen">
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
        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded w-max">
          Enviar
        </button>
      </form>
    </div>
  );
}

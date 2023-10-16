import Link from 'next/link';

export default function Sucesso() {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-black-900 flex flex-col justify-center items-center min-h-screen p-4">
      <img src="https://i.imgur.com/Hiz04ZN.png" alt="Logo" width={200} className="mx-auto mb-6 animate-bounce" />

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg text-center">
        <h2 className="text-black text-2xl mb-4 font-semibold">
          Valeu por chegar até aqui! 🎉
        </h2>
        <p className="text-gray-700 mb-4">
          Agora você tem acesso ao link do grupo onde enviaremos mais informações através do WhatsApp e marcaremos uma live com representantes em várias cidades do Brasil.
        </p>
        <p className="text-gray-600 mb-6">
          Fique tranquilo, acesse o grupo e aguarde um pouco... logo nossa equipe irá chamar você! Até mais... =D
        </p>
        <Link legacyBehavior href="https://chat.whatsapp.com/Dj4AGzXJQakIAIZ8ANK91f">
          <a target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded transition duration-300">
            Entrar no Grupo do WhatsApp
          </a>
        </Link>
      </div>
    </div>
  );
}

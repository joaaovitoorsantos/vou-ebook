export default function Header() {
    return (
        <>
            <div className="bg-gradient-to-br from-gray-800 to-black-900 text-white py-24 px-8 flex flex-col items-center justify-center space-y-12">

                <img src="https://i.imgur.com/Hiz04ZN.png" alt="Logo" width={250} className="mx-auto mb-6" />

                <h1 className="text-4xl font-extrabold mb-4 text-center">Um guia completo para você começar a ganhar dinheiro alugando carros!</h1>

                <div className="bg-gray-800 p-6 rounded-lg shadow-xl text-center">
                    <video
                        width="320px"
                        autoPlay
                        controls
                        muted
                    >
                        <source src="/video.mp4" type="video/mp4" />
                    </video>
                </div>

                <p className="text-lg text-center mt-6">Assista ao vídeo todo! <br />
                    Entenda melhor sobre como entrar nesse mercado com a gente. <br />
                    Uma oportunidade única para quem é do Paraná e Mato Grosso do Sul.
                </p>

                <div className="flex flex-col items-center">
                    <div className="text-xl mb-4">
                        De <span className="line-through text-red-500">R$189,90</span> por: <span className="text-green-500 font-bold text-2xl">R$19,90</span>
                    </div>

                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-10 rounded-full transition duration-300 shadow-lg transform hover:scale-105">
                        Começar a ler agora
                    </button>
                </div>

            </div>
        </>
    )
}

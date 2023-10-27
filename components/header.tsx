//@ts-nocheck
import { useRouter } from "next/router"
export default function Header() {

    const router = useRouter()
    const videoURL = "https://www.youtube.com/embed/uwCAU7Lt2sc?autoplay=1&mute=1&branding=1&autohide=1"

    return (
        <>
            <div className="bg-black from-gray-800 to-black-900 text-white py-24 px-8 flex flex-col items-center justify-center space-y-12">

                <img src="https://i.imgur.com/Hiz04ZN.png" alt="Logo" width={250} className="mx-auto" />

                <h1 className="text-2xl md:text-4xl font-extrabold text-center mb-4">
                    Oportunidade <span className="text-gray-600 underline">ÚNICA</span> para você<span className="italic"> ganhar dinheiro</span> alugando carros na sua cidade
                    <span className="text-red-500"> SEM</span> precisar <span className="text-red-500">COMPRAR</span> carros!
                </h1>

                <div className="video-container bg-gray-800 p-6 rounded-lg shadow-xl text-center">
                    <iframe
                        src={videoURL}
                        frameborder="0"
                        allowFullScreen
                        title="Teste"
                    >
                    </iframe>
                </div>


                <p className="text-lg text-center mt-6">Assista ao vídeo todo! <br />
                    Entenda melhor sobre como entrar nesse mercado com a gente. <br />
                    Uma oportunidade única para quem quer ter sua LOCADORA sem precisar comprar carro.
                </p>

                <button className="bg-green-500 hover:bg-green-600 font-medium text-white py-2 px-6 rounded-full transition duration-200"
                    onClick={() => router.push('https://api.whatsapp.com/send?phone=5547999829477&text=Mais%20informações')}
                >Começar agora</button>
                
            </div>
        </>
    )
}

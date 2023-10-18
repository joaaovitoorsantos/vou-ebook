//@ts-nocheck
import { useRouter } from "next/router"
export default function Header() {

    const router = useRouter()
    const videoURL = "https://www.youtube.com/embed/uwCAU7Lt2sc?autoplay=1&mute=1"

    return (
        <>
            <div className="bg-gradient-to-br from-gray-800 to-black-900 text-white py-24 px-8 flex flex-col items-center justify-center space-y-12">

                <img src="https://i.imgur.com/Hiz04ZN.png" alt="Logo" width={250} className="mx-auto mb-6" />

                <h1 className="text-4xl font-extrabold mb-4 text-center">
                    Oportunidade única para você começar...
                </h1>

                <div className="bg-gray-800 p-6 rounded-lg shadow-xl text-center">
                    <iframe
                        width={'auto'}
                        height={'400'}
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

                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full transition duration-200"
                onClick={() => router.push('/formulario')}
                >Começar agora</button>

            </div>
        </>
    )
}

export default function Header() {

    const videoURL = "https://www.youtube.com/embed/Mz2u4CR3-sE?autoplay=1&mute=1"

    return (
        <>
            <div className="bg-gradient-to-br from-gray-800 to-black-900 text-white py-24 px-8 flex flex-col items-center justify-center space-y-12">

                <img src="https://i.imgur.com/Hiz04ZN.png" alt="Logo" width={250} className="mx-auto mb-6" />

                <h1 className="text-4xl font-extrabold mb-4 text-center">
                    Uma grande para você começar a ganhar dinheiro alugando carros na sua CIDADE!
                </h1>

                <div className="bg-gray-800 p-6 rounded-lg shadow-xl text-center">
                    <iframe
                        width={320}
                        height={480}
                        src={videoURL}
                        frameborder="0"
                        allowFullScreen
                        title="Teste"
                    >
                    </iframe>
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

            </div>
        </>
    )
}

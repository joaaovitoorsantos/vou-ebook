export default function LastSection() {
    return (
        <div className="bg-gradient-to-br from-gray-800 to-black-900 text-white py-24 px-8 flex flex-col items-center justify-center space-y-8">

            <h2 className="text-4xl font-extrabold mb-4 tracking-wide">Comece agora você também</h2>
            <p className="text-2xl mb-4">Pronto! Agora é sua hora de dar o primeiro passo!</p>
            <p className="text-lg">Ao invés de <span className="line-through">R$80mil</span> em uma franquia, seu primeiro passo custará apenas <span className="text-red-600 font-bold text-xl">R$19,90</span>.</p>
            <p className="text-base">E com foco, você pode se tornar um grande empreendedor de locação de carros na sua cidade.</p>
            <p className="text-lg font-semibold mt-4">Está pronto para começar?</p>

            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-16 rounded-full transition-all duration-300 shadow-2xl transform hover:scale-105 hover:shadow-xl">
                Compre já por R$19,90
            </button>

        </div>
    )
}

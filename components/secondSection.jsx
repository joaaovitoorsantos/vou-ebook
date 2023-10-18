export default function SecondSection() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center bg-gray-100 py-16 px-8 space-y-10 lg:space-y-0 lg:space-x-12">

            <img src="https://i.imgur.com/TQ7FieE.jpg" alt="Carros Vou!" className="mx-left lg:w-1/2 rounded-xl shadow-lg" />

            <div className="lg:w-1/2 space-y-6 p-6 bg-white rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Seja um Parceiro Vou!</h2>
                <p className="text-gray-800 leading-relaxed">
                    A Vou! atua em vários segmentos implementando a inovação no mercado de locação de carros e gerando renda, faturamento, além de grandes oportunidades de negócios para diversas pessoas no Sul e Sudeste do Brasil.
                </p>
                <p className="mt-4 text-gray-800 leading-relaxed">
                    Ao lado, você vê uma das oportunidades: ser um franqueado Vou! No entanto, nesta página, você terá a oportunidade de se tornar um parceiro Vou sem precisar investir em uma franquia!
                </p>
            </div>
        </div>
    )
}

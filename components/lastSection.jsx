import { useRouter } from "next/router"

export default function LastSection() {    
    const router = useRouter()
    return (
        <>
            <div className="bg-black to-black-900 text-white py-24 px-8 flex flex-col items-center justify-center space-y-8">
                <h2 className="text-4xl font-extrabold mb-4 tracking-wide">Comece agora você também</h2>
                <p className="text-2xl mb-4">Agora é sua hora de dar o primeiro passo!</p>

                <p className="text-base">E com foco, você pode se tornar um grande empreendedor de locação de carros na sua cidade.</p>
                <p className="text-lg font-semibold mt-4">Está pronto para começar?</p>


                <button className="bg-red-900 hover:bg-red-800 font-medium text-white py-2 px-6 rounded-full transition duration-200"
                onClick={() => router.push('/formulario')}
                >Começar agora</button>

            </div>
        </>

    )
}

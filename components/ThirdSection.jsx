export default function ThirdSection() {
    return (
        <div className="bg-gradient-to-br from-gray-800 to-black-900 text-white py-20 px-8 flex flex-col items-center justify-center space-y-10">

            <h2 className="text-3xl font-bold mb-4 tracking-wide">Adquira seu Ebook completo agora!</h2>

            <div className="border-2 border-white p-2 rounded">
                <img src="https://i.imgur.com/r0JjNvx.png" alt="Ebook cover" 
                    width={300}
                className="rounded-md shadow-xl transition-transform hover:scale-105" />
            </div>
            
            <div className="text-xl space-y-4">
                <p className="line-through text-red-500 text-lg">de R$189,90</p>
                <p className="font-bold text-5xl text-green-400 tracking-wide animate-pulse">por R$19,90</p>
            </div>

            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-10 rounded-full transition duration-300 shadow-2xl transform hover:scale-105">
                Começar a ler agora mesmo!
            </button>

            <div className="flex items-center space-x-3 mt-4">
                <span className="text-base font-medium bg-green-500 px-4 py-2">
                    Compra segura!
                </span>
            </div>
            
            <div className="flex space-x-6 mt-4">
                <img src="https://i.imgur.com/xv1CpgB.png" alt="Elo" className="w-16" />
                <img src="https://i.imgur.com/azP5Gc0.png" alt="Hipercard" className="w-16" />
                <img src="https://i.imgur.com/PVPZ3au.png" alt="Mastercard" className="w-16" />
                <img src="https://i.imgur.com/eldFUlw.png" alt="Visa" className="w-16" />
            </div>

        </div>
    )
}

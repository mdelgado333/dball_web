import Link from "next/link";
import { bebas } from "../ui/fonts";
import Image from "next/image";

export default function Page() {
    return (
    <div>
        <div className="w-full flex flex-row justify-evenly mt-20 px-20">

            <div className="w-100 h-100 bg-white text-black border rounded-xl flex flex-col justify-evenly items-center transition duration-200 ease-in-out hover:bg-white-800 hover:scale-105">
                <div className={`${bebas.className} text-3xl`}>
                    Coaching 1:1 de 1 mes
                </div>
                <div>
                <div className="flex flex-row content-top">
                        <Image
                        src='/check.svg'
                        width={15}
                        height={15}
                        alt='check'/>
                        1 llamada individual para iniciar el programa
                    </div>
                    <div className="flex flex-row content-top items-start">
                        <Image
                        src='/check.svg'
                        width={15}
                        height={15}
                        alt='check'
                        className="pt-1"/>
                        1 preparación física individual de 1 mes de duración
                    </div>
                    <div className="flex flex-row content-top">
                        <Image
                        src='/check.svg'
                        width={15}
                        height={15}
                        alt='check'/>
                        1 llamada individual para preparar el programa
                    </div>
                </div>
                <Link href="/vert/checkout" className={`${bebas.className} border border-pink-400 rounded-xl p-3 w-30 text-center transition duration-200 ease-in-out hover:bg-pink-400 hover:scale-105`}>1 mes 49€</Link>
            </div>

            <div className="w-100 h-100 bg-white text-black border rounded-xl flex flex-col justify-evenly items-center transition duration-200 ease-in-out hover:scale-105">
                <div className={`${bebas.className} text-3xl`}>
                    Coaching 1:1 de 3 meses
                </div>
                <div>
                    <div className="flex flex-row content-top">
                        <Image
                        src='/check.svg'
                        width={15}
                        height={15}
                        alt='check'
                        className="pt-1"/>
                        3 llamadas individuales al principio de cada mes para preparar el programa
                    </div>
                    <div className="flex flex-row content-top">
                        <Image
                        src='/check.svg'
                        width={15}
                        height={15}
                        alt='check'
                        className="pt-1"/>
                        3 preparaciones físicas individuales de 1 mes de duración ajustadas mes a mes
                    </div>
                    <div className="flex flex-row content-top">
                        <Image
                        src='/check.svg'
                        width={15}
                        height={15}
                        alt='check'/>
                        1 llamada individual para iniciar el programa
                    </div>
                    
                    

                </div>
                <Link href="/vert/checkout" className={`${bebas.className} border border-pink-400 rounded-xl p-3 w-30 text-center transition duration-200 ease-in-out hover:bg-pink-400 hover:scale-105`}>3 meses 119€</Link>
            </div>

            <div className="w-100 h-100 bg-white text-black border rounded-xl flex flex-col justify-evenly items-center transition duration-200 ease-in-out hover:scale-105">
                <div className={`${bebas.className} text-3xl`}>
                    Coaching 1:1 de 6 meses
                </div>
                <div>
                <div className="flex flex-row content-top">
                        <Image
                        src='/check.svg'
                        width={15}
                        height={15}
                        alt='check'/>
                        1 llamada individual para iniciar el programa
                    </div>
                    <div className="flex flex-row content-top">
                        <Image
                        src='/check.svg'
                        width={15}
                        height={15}
                        alt='check'/>
                        6 preparaciones físicas individuales de 1 mes de duración ajustadas mes a mes
                    </div>
                    <div className="flex flex-row content-top">
                        <Image
                        src='/check.svg'
                        width={15}
                        height={15}
                        alt='check'/>
                        1 llamada individual para iniciar el programa
                    </div>
                </div>
                <Link href="/vert/checkout" className={`${bebas.className} border border-pink-400 rounded-xl p-3 w-30 text-center transition duration-200 ease-in-out hover:bg-pink-400 hover:scale-105`}>6 meses 199€</Link>
            </div>
        </div>
    </div>
)
}
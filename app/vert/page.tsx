import Link from "next/link";
import { bebas } from "../ui/fonts";
import Image from "next/image";

export default function Page() {
    return (
    <div>
        <div className={`${bebas.className} text-center text-[100px]`}>
            Coaching 1:1 de salto vertical
        </div>
        <div className="w-full flex flex-row justify-evenly mt-10 px-20">

            <div className="w-100 h-125 px-10 py-5 backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 text-white border rounded-xl flex flex-col justify-evenly items-center transition duration-200 ease-in-out hover:scale-105">
                <div className={`${bebas.className} text-3xl`}>
                    Planificación de 1 mes
                </div>
                <div className="flex flex-col gap-3">
                <div className="flex flex-row content-top gap-2">
                        <Image
                        className="pb-6"
                        src='/check.svg'
                        width={15}
                        height={15}
                        alt='check'/>
                        1 llamada individual para iniciar el programa
                    </div>
                    <div className="flex flex-row content-top gap-2">
                        <Image
                        className="pb-6"
                        src='/check.svg'
                        width={15}
                        height={15}
                        alt='check'
                        />
                        1 plan de preparación física individualizado de 1 mes de duración
                    </div>
                    <div className="flex flex-row content-top gap-2">
                        <Image
                        className="pb-6"
                        src='/check.svg'
                        width={15}
                        height={15}
                        alt='check'/>
                        1 llamada grupal al acabar el programa para ver las mejoras
                    </div>
                </div>
                <Link href="/vert/checkout" className={`${bebas.className} flex flex-row justify-center gap-1 border border-white rounded-xl p-3 w-30 text-center transition duration-200 ease-in-out hover:bg-black hover:scale-105`}>49€</Link>
            </div>

            <div className="w-100 h-125 px-10 py-5 backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 text-white border rounded-xl flex flex-col justify-evenly items-center transition duration-200 ease-in-out hover:scale-105">
                <div className={`${bebas.className} text-3xl`}>
                    Planificación de 3 meses
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-row content-top gap-2">
                        <Image
                        className="pb-6"
                        src='/check.svg'
                        width={15}
                        height={15}
                        alt='check'
                        />
                        3 llamadas individuales al principio de cada mes para preparar el programa
                    </div>
                    <div className="flex flex-row content-top gap-2">
                        <Image
                        className="pb-6"
                        src='/check.svg'
                        width={15}
                        height={15}
                        alt='check'
                        />
                        3 preparaciones físicas individuales de 1 mes de duración cada una ajustadas mes a mes
                    </div>
                    <div className="flex flex-row content-top gap-2">
                        <Image
                        className="pb-6"
                        src='/check.svg'
                        width={15}
                        height={15}
                        alt='check'/>
                        1 llamada grupal al acabar el programa para ver las mejoras
                    </div>
                    
                    

                </div>
                <Link href="/vert/checkout" className={`${bebas.className} flex flex-row justify-center gap-1 border border-white rounded-xl p-3 w-30 text-center transition duration-200 ease-in-out hover:bg-black hover:text-white hover:scale-105`}>
                <div className="line-through text-red-400">
                    149€
                </div>
                <div>
                    119€
                </div>
                </Link>
            </div>

            <div className="w-100 h-125 px-10 py-5 backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 text-white border rounded-xl flex flex-col justify-evenly items-center transition duration-200 ease-in-out hover:scale-105">
                <div className={`${bebas.className} text-3xl`}>
                    Planificación de 6 meses
                </div>
                <div className="flex flex-col gap-3">
                <div className="flex flex-row content-top gap-2">
                        <Image
                        className="pb-6"
                        src='/check.svg'
                        width={15}
                        height={15}
                        alt='check'/>
                        6 llamadas individuales al principio de cada mes para preparar el programa
                    </div>
                    <div className="flex flex-row content-top gap-2">
                        <Image
                        className="pb-12"
                        src='/check.svg'
                        width={15}
                        height={15}
                        alt='check'/>
                        6 preparaciones físicas individuales de 1 mes de duración cada una ajustadas mes a mes
                    </div>
                    <div className="flex flex-row content-top gap-2">
                        <Image
                        className="pb-6"
                        src='/check.svg'
                        width={15}
                        height={15}
                        alt='check'/>
                        1 llamada grupal al acabar el programa para ver las mejoras
                    </div>
                </div>
                <Link href="/vert/checkout" className={`${bebas.className} flex flex-row justify-center gap-1 border border-white rounded-xl p-3 w-30 text-center transition duration-200 ease-in-out hover:bg-black hover:scale-105`}>
                <div className="line-through text-red-400">
                    299€
                </div>
                <div>
                    199€
                </div>
                </Link>
            </div>
        </div>
    </div>
)
}
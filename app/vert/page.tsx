import Link from "next/link";
import { bebas } from "../ui/fonts";
import Image from "next/image";


export default function Page() {
    return (
    <div>
        <div className={`${bebas.className} text-center text-3xl sm:text-4xl md:text-5xl lg:text-[75px] xl:text-[100px]`}>
            Coaching 1:1 de salto vertical
        </div>
        <div className="w-full flex flex-col gap-y-5 lg:flex-row lg:gap-x-5 justify-evenly mt-10 px-5 sm:px-20">

            <div className="border gap-y-3 lg:w-2/3 xl:h-[400px]  px-10 py-5 sm:py-10 backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 text-white border rounded-xl flex flex-col justify-evenly items-center transition duration-200 ease-in-out hover:scale-105">
                <div className={`${bebas.className} text-3xl lg:text-2xl xl:text-3xl`}>
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
                <Link
                    href={{
                        pathname: '/vert/checkout',
                        query: { duration: '1' }
                     }}
                     className={`${bebas.className} flex flex-row justify-center gap-1 border border-white rounded-xl p-3 w-30 text-center transition duration-200 ease-in-out hover:bg-black hover:text-white hover:scale-105`}>
                     <div className="line-through text-red-400">
                         59€
                     </div>
                     <div>
                         15€
                     </div>
                </Link>
            </div>

            <div className="border gap-y-3 lg:w-2/3 xl:h-[400px] px-10 py-5 sm:py-10 backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 text-white border rounded-xl flex flex-col justify-evenly items-center transition duration-200 ease-in-out hover:scale-105">
                <div className={`${bebas.className} text-3xl lg:text-2xl xl:text-3xl`}>
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
                <Link 
                href={{
                    pathname: '/vert/checkout',
                    query: { duration: 3 }
                 }}
                className={`${bebas.className} flex flex-row justify-center gap-1 border border-white rounded-xl p-3 w-30 text-center transition duration-200 ease-in-out hover:bg-black hover:text-white hover:scale-105`}>
                <div className="line-through text-red-400">
                    179€
                </div>
                <div>
                    44€
                </div>
                </Link>
            </div>

            <div className="border gap-y-3 lg:w-2/3 xl:h-[400px] px-10 py-5 sm:py-10 backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 text-white border rounded-xl flex flex-col justify-evenly items-center transition duration-200 ease-in-out hover:scale-105">
                <div className={`${bebas.className} text-3xl lg:text-2xl xl:text-3xl`}>
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
                <Link 
                href={{
                    pathname: '/vert/checkout',
                    query: { duration: '6' }
                 }}
                className={`${bebas.className} flex flex-row justify-center gap-1 border border-white rounded-xl p-3 w-30 text-center transition duration-200 ease-in-out hover:bg-black hover:scale-105`}>
                <div className="line-through text-red-400">
                    359€
                </div>
                <div>
                    89€
                </div>
                </Link>
            </div>
        </div>
        <div className="h-10">

        </div>
    </div>
)
}
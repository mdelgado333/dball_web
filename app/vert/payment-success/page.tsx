import { bebas } from "@/app/ui/fonts"

export default function PaymentSuccess({
    searchParams: { amount },
}: {
    searchParams: { amount: string }
}) {
    return (
        <div className="h-screen pb-50 flex flex-col justify-center">
            <div className={`${bebas.className} text-[100px] text-center`}>
                Gracias por confiar en nosotros
            </div>
            <div className="w-200 backdrop-filter self-center backdrop-blur-md bg-opacity-10 border border-gray-100 text-white border rounded-xl">
            <div className="p-5">
                Tu compra por el valor de {amount}€ ha sido realizada con éxito!
            </div>
            <div className="p-5">
                Te hemos mandado un correo electrónico a {} donde podrás agendar la llamada inicial para poder hacer tu planificación acorde a tus necesidades
            </div>
            </div>
            
        </div>
        
    )
}
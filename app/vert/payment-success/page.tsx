'use client'

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { bebas } from "@/app/ui/fonts";

export default function PaymentSuccess() {
    const searchParams = useSearchParams();
    const [amount, setAmount] = useState("0");
    const [email, setEmail] = useState<string | undefined>(undefined);
    const [emailSent, setEmailSent] = useState(false);

    useEffect(() => {
        setAmount(searchParams.get("amount") || "0");
        setEmail(searchParams.get("email") || undefined);
    }, [searchParams]);

    useEffect(() => {
        if (email && !emailSent) {
            sendConfirmationEmail(email);
        }
    }, [email, emailSent]);

    const sendConfirmationEmail = async (customerEmail: string) => {
        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: customerEmail }),
            });

            if (response.ok) {
                console.log("Email sent successfully");
                setEmailSent(true);
            } else {
                console.error("Error sending email");
            }
        } catch (error) {
            console.error("Failed to send email:", error);
        }
    };

    return (
        <div className="h-screen w-5/6 self-center pt-5 flex flex-col justify-top gap-y-10">
            <div className={`${bebas.className} text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-7xl text-center`}>
                Gracias por confiar en nosotros
            </div>
            <div className="w-full lg:w-2/3 backdrop-filter self-center backdrop-blur-md bg-opacity-10 border border-gray-100 text-white border rounded-xl">
                <div className="p-5">
                    Tu compra por el valor de {amount}€ ha sido realizada con éxito!
                </div>
                <div className="p-5">
                    {email
                        ? `Te hemos mandado un correo electrónico a ${email} donde podrás agendar la llamada inicial para poder hacer tu planificación acorde a tus necesidades.`
                        : "No se proporcionó un correo electrónico."}
                </div>
            </div>
        </div>
    );
}

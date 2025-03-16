'use client'

import CheckoutPage from '@/app/ui/components/checkoutPage'
import { convertToSubCurrency } from '@/app/lib/convertToSubcurrency'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { bebas } from '@/app/ui/fonts'

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined")
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

export default function Page() {
    const amount = 49
    const duration = "1 mes"
    return (
        <div className='text-center items-center flex flex-col'>
            <div className={`${bebas.className} text-[100px]`}>
                Resumen de compra
            </div>
            <div className='w-100 px-10 py-5 backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 text-white border rounded-xl flex flex-col justify-evenly items-center'>
                Coaching 1:1 de {amount}€ por {duration}
            </div>
            <Elements
                stripe={stripePromise}
                options={{
                    mode: "payment",
                    amount: convertToSubCurrency(amount),
                    currency: "eur"
                }}
            >
                {/* <CheckoutPage amount={amount} /> */}
            </Elements>
        </div>
        
    )
}
'use client'

import CheckoutPage from '@/app/ui/components/checkoutPage'
import { convertToSubCurrency } from '@/app/lib/convertToSubcurrency'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { bebas } from '@/app/ui/fonts'
import { dballVertPlans } from '../../lib/data'
import { useSearchParams } from 'next/navigation'

export default function Page() {

    if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
        throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined")
    }

    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

    const searchParams = useSearchParams();
    const duration = searchParams.get("duration") ?? "1"
    const selectedPlan = dballVertPlans.find((plan: {
        title: string;
        price: number;
        originalPrice: number;
        duration: number;
        features: string[];
    }) => plan.duration.toString() === duration);
    const amount = selectedPlan?.price ?? 49
    const monthPlural = duration?.toString()=='1' ? 'mes' : 'meses'

    return (
        <div className='text-center items-center flex flex-col gap-y-5'>
            <div className={`${bebas.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl`}>
            Coaching 1:1 de {amount}€ por {duration} {monthPlural}
            </div>
            <div className='w-5/6 sm:w-100 px-10 py-5 mb-5 backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 text-white border rounded-xl flex flex-col justify-evenly items-center'>
                <Elements
                stripe={stripePromise}
                options={{
                    loader: "auto",
                    mode: "payment",
                    amount: convertToSubCurrency(amount),
                    currency: "eur"
                }}
            >
                <CheckoutPage amount={amount} />
            </Elements>
            </div>
        </div>
        
    )
}
'use client'

import React, { useEffect, useState } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import { convertToSubCurrency } from '@/app/lib/convertToSubcurrency'
import { bebas } from '../fonts'

const CheckoutPage = ( {amount} : {amount: number} ) => {
    const stripe = useStripe()
    const elements = useElements()

    const [errorMessage, setErrorMessage] = useState<string>()
    const [clientSecret, setClientSecret] = useState("")
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")

    useEffect(() => {
        fetch("/api/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ amount: convertToSubCurrency(amount) })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("Payment Intent Response:", data) // Debugging
            setClientSecret(data.clientSecret)
        })
    }, [amount])

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setLoading(true)

        if (!stripe || !elements) {
            return
        }

        const { error: submitError } = await elements.submit()

        if (submitError) {
            setErrorMessage(submitError.message)
            setLoading(false)
            return
        }

        const { error } = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: `http://www.dballhub.com/vert/payment-success?amount=${amount}&email=${email}`,
                receipt_email: email,  // Send the email to Stripe
            }
        })

        if (error) {
            setErrorMessage(error.message)
        } else {

        }

        setLoading(false)

        if (!clientSecret || !stripe || !elements) {
            return (
                <div className="flex items-center justify-center">
                    <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                    role="status"
                    >
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Loading...
                    </span>
                    </div>
                </div>
            )
        }
    }

    return (
        <form onSubmit={handleSubmit} className='p-2 flex flex-col'>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Introduce tu email"
                required
                className="border p-2 mb-4 rounded-xl bg-white text-black w-full"
            />
            {clientSecret && <PaymentElement/>}
            {errorMessage && <div>{errorMessage}</div>}
            <button 
            disabled={!stripe || loading}
            className={`${bebas.className} border border-white rounded-xl p-3 mt-5 w-full text-center transition duration-200 ease-in-out hover:bg-black hover:scale-105`}>
                {!loading ? `Pagar ${amount}€` : "Procesando pago..."}
            </button>
        </form>
    )
}

export default CheckoutPage
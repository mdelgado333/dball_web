import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe";

export async function POST(request: NextRequest) {

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
        throw new Error("STRIPE_SECRET_KEY is not defined");
    }
    const stripe = new Stripe(stripeSecretKey);
    
    try {

        const { amount } = await request.json()

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "eur",
            automatic_payment_methods: {enabled: true}
        })

        return NextResponse.json({ clientSecret: paymentIntent.client_secret })

    } catch (error) {
        console.error("Internal Error:", error)
        return NextResponse.json(
            { error: `Internal Server Error ${error}` },
            { status: 500 }
        )
    }
}
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"DBALLVERT" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Agenda tu llamada inicial",
      html: `
      <p>Muchas gracias por confiar en nuestros servicios!
      <br />
      <br />
      El link de a continuación te llevara a Calendly,
      <br />
      una plataforma donde te saldrán todas las horas disponibles para agendar la videollamada inicial donde recopilaremos información con el fin de poder hacer una planificación a medida de tus necesidades 
      <br />
      <br />
      <a href="https://calendly.com/dballvert/coaching-1-1">Calendly Link</a>
      <br/>
      <br />
      Si se diese el caso de no tener disponibilidad con ninguna de las horas fijadas,
      <br />
      escribenos a dballdesarrollatuvertical@gmail.com explicandonos la situación y haremos todo lo posible para adaptarnos a tu horario
      <br />
      <br />
      Muchas gracias,
      <br />@dballvert
      </p>`,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

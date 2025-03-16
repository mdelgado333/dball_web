import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { bebas, inter } from "./ui/fonts"; 
import Numbers from './ui/landing/numbers'
import DBALL from "./ui/landing/dball";





export default function Home() {
  return (
    
    <div className="border items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 snap-y snap-proximity">
      
      <main className="flex flex-col justify-center border items-center sm:items-start snap-y snap-proximity">
        
        <div id='dball' className="w-full pt-25 pb-75 flex flex-col items-center justify-items-center snap-start">

          <div className={`${bebas.className} flex flex-col items-center justify-center bg-fixed`}>
            <div className="border h-80">
              <DBALL 
              text="DBALL"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-[250px] mb-8"
              />
            </div>
            <div className={`${inter.className} text-[15px] justify-center w-200 text-justify text-[25px] font-bold`}>
              Bienvenido al ecosistema dball, donde el epicentro es el baloncesto y los satélites son la mentalidad incansable, la mejora diaria en todas las áreas y conseguir tu mejor físico
            </div>
          </div>
          

        </div>

        <div id='community' className="border pb-50 snap-start">
          <div className={`${bebas.className} text-[150px] flex flex-row justify-even border`}>
            <div className="border">
            Comunidad
            </div>
            <div className="border">
              +
            <Numbers
            from={0}
            to={260}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
          />
            k
            <SocialIcon className="w-300 border" url="https://discord.gg/wn8PfwVy"/>
            </div>
          </div>
            <div>
              Contamos con una de las comunidades de baloncesto más grande de habla hispana, contando con más de 250k seguidores entre todas nuestras redes sociales
            </div>
            <div>
                
              <div>
                Que hay en la comunidad
              </div>
            </div>

        </div>

        <div id='mentality' className="pb-50 border snap-start">
          <div className={`${bebas.className} text-[100px] border flex flex-row`}>
            <div className="border">
              @dballmentality
            </div>
            <div className="border">
              +
            <Numbers
            from={0}
            to={201}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
          />
            k
              <div className="flex flex-row">
                <SocialIcon bgColor="white" fgColor="black" url="https://www.instagram.com/dballmentality_/"/> 
                <SocialIcon bgColor="white" fgColor="black" url="https://www.tiktok.com/@dballmentality_"/>  
              </div>       
            </div>
          </div>
          <div>
              Es increíble el número de atletas que pierden la ilusión por el baloncesto ya sea por falta de confianza, un mal entrenador o darse cuenta que no van a llegar ten lejos como pensaban. De aqui nació @dballmentality, un espacio seguro donde ponemos el entrenamiento de la mentalidad a la misma altura que el físico o las habilidades y donde nuestra filosfía es muy clara: entrenamos para ser un 1% mejores que ayer, porque luego disfrutamos un 1% más de jugar tan bien
            </div>
        </div>
        
        <div id='academy' className="snap-start">
          <div className={`${bebas.className} text-[100px] border flex flex-row`}>
          @dballacademy
          <div>
            +
          <Numbers
            from={0}
            to={47}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
          />
            k        
            <div>
            <SocialIcon bgColor="white" fgColor="black" url="https://www.tiktok.com/@dballacademy"/>
            <SocialIcon bgColor="white" fgColor="black" url="https://www.instagram.com/dballacademy/"/>
            </div>  
          </div>
          </div>
          
          <div>
            Aprendiz de todo mestro de nada, muchas veces te habrás sentido así jugando al baloncesto ya que hay un montón de áreas en las que mejorar, con nuestra metodología creamos anotadores de élite a 5 niveles: finalización, media distancia, triple, poste y Iso
          
        </div>
        </div>
        <div id='vert' className="snap-start">
          @dballvert
          <div>
            Muchas veces el siguiente salto de calidad no consiste en tirar o botar mejor, y simplemente consiste en llevar tu físico al siguiente nivel            
            <SocialIcon bgColor="white" fgColor="black" url="https://www.tiktok.com/@dballvert"/>
            <SocialIcon bgColor="white" fgColor="black" url="https://www.instagram.com/dballvert"/>
            <div>
              +
            <Numbers
              from={0}
              to={14}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
              k  
            </div>
            
          <div>
            <Link href="/vert">Coaching 1:1</Link>
          </div>
        </div>
        </div>

        <div id="app" className="snap-start">
          app
          <div>
            Queríamos un sitio donde confluyesen estos 3 pilares de mentalidad incansable, mejora constante y un físico siempre mejorable
          </div>
          <div>
            coming sooner than later
          </div>
        </div>
        <div id='bts' className="snap-start">
          behind dball
        </div>
        <div>
        mike "dball" delgado empezó en redes sociales como @mikedball creando contenido de baloncesto y ahi fue cuando se dio cuenta del potencial de las redes sociales para compartir información de valor y juntar comunidades que sumen
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
      
    </div>
  );
}

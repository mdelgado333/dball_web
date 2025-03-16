import { bebas, roboto } from "../fonts"
import Image from "next/image"
import { SocialIcon } from "react-social-icons";
import Numbers from './numbers'

export default function Comunidad(){
    return (
        <div className="flex flex-row">
                  <div className={`${bebas.className} flex flex-col  justify-even border`}>
                    
                    <div className="text-[200px]">
                    Comunidad
                    </div>
                    <div className="flex flex-row text-[100px]">
                    <div className={`${roboto.className} text-[25px] w-100 backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 text-white border rounded-xl transition`}>
                        Contamos con una de las comunidades de baloncesto más grande de habla hispana, contando con más de 250k seguidores entre todas nuestras redes sociales
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                    aria-hidden
                    src="/comunidad.jpg"
                    alt="Jordan image"
                    width={300}
                    height={300}
                    />
                    <SocialIcon url="https://discord.gg/wn8PfwVy"/>
                  </div>
                  <div className={`${bebas.className} text-[150px] rotate-90 border`}>
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
                  </div>
                  </div>
    )
}
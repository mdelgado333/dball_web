import { bebas } from "../fonts"
import Numbers from './numbers'
import { SocialIcon } from "react-social-icons"

export default function Academy() {

    return (
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
          <div>
            Aprendiz de todo mestro de nada, muchas veces te habrás sentido así jugando al baloncesto ya que hay un montón de áreas en las que mejorar, con nuestra metodología creamos anotadores de élite a 5 niveles: finalización, media distancia, triple, poste y Iso
          
        </div>
          </div>
          
          
    )
}
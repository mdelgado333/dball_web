import Numbers from './numbers'
import { bebas } from '../fonts'
import { SocialIcon } from 'react-social-icons'

export default function Mentality(){
    return (
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
                    <div>
                      Es increíble el número de atletas que pierden la ilusión por el baloncesto ya sea por falta de confianza, un mal entrenador o darse cuenta que no van a llegar ten lejos como pensaban. De aqui nació @dballmentality, un espacio seguro donde ponemos el entrenamiento de la mentalidad a la misma altura que el físico o las habilidades y donde nuestra filosfía es muy clara: entrenamos para ser un 1% mejores que ayer, porque luego disfrutamos un 1% más de jugar tan bien
                    </div>
                  </div>
                 
                   
    )
}
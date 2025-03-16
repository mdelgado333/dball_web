import { SocialIcon } from "react-social-icons"
import Numbers from './numbers'
import Link from "next/link"

export default function Vert() {
    return (
        <div>
          @dballvert
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
    )
}
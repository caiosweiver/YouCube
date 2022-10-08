import Link from "next/link"
import Image from "next/image"

export default function _option(props){
    return <Link href={props.link}>
          <Image src={props.img} alt={props.alt}></Image>
        </Link>
}
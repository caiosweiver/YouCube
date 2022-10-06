import Link from "next/link"
import Image from "next/image"
import logo from '../../public/images/logo.png'
import style from '../styles/header.module.css'

export default function _header(props){
    return(
        <header className={style.header}>
            
                <Link href='/'>
                    <div className={style.logoarea}>
                    <Image src={logo} width="100px" height="100px" alt="logo"></Image>
                    <h1>YouCube</h1>
                    </div>
                </Link>
                <nav className={style.menu}>
                    <ul>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/recentes'>Recentes</Link></li>
                        <li><Link href='/natureza'>Natureza</Link>
                        </li>
                        <li><Link href='/abstrato'>Abstrato</Link></li>
                    </ul>
                </nav>
                
                
        </header>
    )
}
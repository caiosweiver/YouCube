import Link from "next/link"
import Image from "next/image"
import logo from '../../public/images/logo.png'
import style from '../styles/header.module.css'
import { useState } from "react"

export default function _header(props){
    return(
        <header className={style.header}>
            
                <Link href='/'>
                    <div className={style.logoarea}>
                    <Image src={logo} width="80px" height="80px" alt="logo"></Image>
                    <h1>YouCube</h1>
                    </div>
                </Link>
                <div className={style.mobile}>
                    <div></div>
                </div>
                <nav className={style.menu} id="menu">
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
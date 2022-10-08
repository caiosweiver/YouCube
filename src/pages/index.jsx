import _layout from "../components/_layout"
import _selection from "../components/_selection"
import natureza from '../../public/images/natureza.jpg'
import Link from "next/link"
import Image from "next/image"

export default function index(){
  return(
    <_layout>
      <_selection img={natureza} alt="natureza">
        <Link href='/'>
          <Image src={natureza} alt='natureza'></Image>
        </Link>
      </_selection>
    </_layout>
  )
}
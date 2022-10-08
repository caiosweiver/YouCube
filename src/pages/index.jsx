import _layout from "../components/_layout"
import _selection from "../components/_selection"
import _option from "../components/_option"
import natureza from '../../public/images/natureza.jpg'
import Link from "next/link"
import Image from "next/image"

export default function index(){
  return(
    <_layout>
      <_selection img={natureza} alt="Natureza">
        <_option link='/' img={natureza} alt='natureza' />
      </_selection>
    </_layout>
  )
}
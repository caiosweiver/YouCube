import Image from "next/image"
import { useState } from "react"
import style from '../styles/selection.module.css'


export default function _selection(props){
    
    const listState = useState(createList(style.hide))
    let list = listState[0]
    let changeList = listState[1]

    function createList(style){
        return <div className={style}>
                {props.children}
                </div>
    }

    function showList(){
        if(list.props.className == undefined){
            changeList(createList(style.hide))
        }
        else changeList(createList())
    }

  

    return(
        <div className={style.container}>
        <label className={style.legend} onClick={showList}>{props.alt}</label>
        <Image src={props.img} layout="fixed" width='320px' height="213px" alt={props.alt} priority/>
        {list}
        </div>
    )
}

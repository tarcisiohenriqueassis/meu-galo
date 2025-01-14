
import Image from "next/image";
import Link from "next/link";

import style from "../CardGalo/cardGalo.module.css";

const CardGalo = (props) =>{
    return(
        <section className={style.containerGlobalCard}>
            <div className={style.containerImagem} >
               <Link href="/">
                   <Image  placeholder="blur" className={style.imagem} src={props.imagem} alt={props.alt} title={props.alt} />
               </Link>
            </div>
            <div className={style.containerInformaçoesGalo}>
                <h2>{props.nome}</h2>
                <p>{props.raça}</p>
                <p> Registro N°{props.numeroRegistro}</p>
            </div>
        </section>

    )
}

export default CardGalo;
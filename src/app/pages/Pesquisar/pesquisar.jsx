import Image from "next/image";

import style from "../Pesquisar/pesquisar.module.css";

import LupaPesquisar from "@/app/(public)/icons/iconSearch.png";


function PesquisarGalo(props) {
    return(
        <section className={style.containerGlobalPesquisar}>
            <div className={style.containerInput}>
                <Image src={LupaPesquisar} alt=" Lupa pesquisar" title="Pesquisar" priority="true" />
                <input className={style.input} type="search" onChange={props.onChange} placeholder="Digite aqui"/>
            </div>
        </section>
    )
}

export default PesquisarGalo;
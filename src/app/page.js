"use client";

import styles from "./page.module.css";

import  Galos  from "./ListaGalos/listaGalos.js";

import CardGalo from "./Componentes/CardGalo/cardGalo.jsx";
import Header from "./Componentes/Header/header";
import Pesquisar from "./pages/Pesquisar/pesquisar";

import React,{ useState } from "react";
import Head from "next/head";

export default function Home() {

  const[esconderBarraPesquisar, setEsconderBarraPesquisar] = useState(true);

//função que faz a filtragem da pesquisa 
  const [buscarGalo,setbuscarGalo] = useState(Galos);

  const BuscarGalo =(textoDigitado)=>{
   
        setbuscarGalo(Galos.filter(
         g => g.nome.toLocaleLowerCase().includes(textoDigitado.toLocaleLowerCase()) ||
         g.numeroRegistro.toLocaleLowerCase().includes(textoDigitado.toLocaleLowerCase()) ||
         g.raça.toLocaleLowerCase().includes(textoDigitado.toLocaleLowerCase())
        )
        )
  }

  const ativaBarraDePesquisa =()=>{
       setEsconderBarraPesquisar(fechado => !fechado)     
  }


  return (
    <>
    <Head>
    <meta name="keywords" content="Garnizer,Galinha, Galo"/>
    <meta name="author" content="Tarcisio H" />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charSet="UTF-8" />
    </Head>
      <main className={styles.main}>
        <section>
          <Header onclick={ativaBarraDePesquisa} />
        </section>
        <div className={esconderBarraPesquisar ? styles.esconderBarraPesquisar : styles.aparecerBarraPesquisar}>
          <Pesquisar onChange={event=>BuscarGalo(event.target.value)} />
        </div>
       <section className={styles.containerSecaoCardGalos}>   
         {buscarGalo.map((galo)=>{
           return <CardGalo key={galo.id} nome={galo.nome} raça={galo.raça} numeroRegistro={galo.numeroRegistro} imagem={galo.imagem} alt={galo.alt}  />
         })}
       </section>
        </main>
        </>
       
  );
}

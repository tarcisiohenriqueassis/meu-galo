import Image from "next/image";
import styles from "./page.module.css";

import  Galos  from "./ListaGalos/listaGalos.js";

import CardGalo from "./Componentes/CardGalo/cardGalo.jsx";

export default function Home() {
  return (
      <main className={styles.main}>
       <section className={styles.containerSecaoCardGalos}>   
         {Galos.map((galo)=>{
           return <CardGalo nome={galo.nome} raça={galo.raça} numeroRegistro={galo.numeroRegistro} imagem={galo.imagem} alt={galo.alt}  />
         })}
       </section>
        </main>
       
  );
}

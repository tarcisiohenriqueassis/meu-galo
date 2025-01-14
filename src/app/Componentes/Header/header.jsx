"use client";
import Image from "next/image";
import Link from "next/link";

import React,{ useState } from "react";

import style from "./header.module.css";

import LogoMarca from "@/app/(public)/logo/logo.png";
import lupa from "@/app/(public)/icons/iconSearch.png"

import iconAbrirMenu from "@/app/(public)/icons/openMenu.png";
import iconFechaMenu from "@/app/(public)/icons/closeMenu.png";

function Header(props) {

    const [iconFechado, setIconFechado] = useState(true)

    const AbreFechaMenu = () => {
       setIconFechado(fechado => !fechado)  
    }
    

    return(
        <header className={style.Header}>
          <div className={style.containerLogo}>
            <Image className={style.imagemLogo} src={LogoMarca} alt="logo" />
          </div>   
          <div>
          <h1 className={style.h1}>Meu Galo</h1>
          </div>
          <div className={style.containerGlobalMenuHBG}>  
          <button className={style.btnPesquisar} onClick={props.onclick}><Image src={lupa}/></button> 
            <button  className={style.BTN} onClick={AbreFechaMenu}>
             {iconFechado 
             ?<Image className={style.imagemIconBTN} placeholder="empty"  src={iconAbrirMenu} width={60} alt="Abrir Menu" title="Abrir Menu" /> 
             :<Image className={style.imagemIconBTN}  src={iconFechaMenu} width={60} alt="Fechar menu" title="Fechar Menu" /> }
            </button>
           <nav className={iconFechado ?style.menuClose :style.MenuOpen}>
            <Link className={style.Link} href="/">Inicio</Link>
            <Link className={style.Link} href="/">Cadastrar</Link>
            </nav>
          </div>
        </header>
     )
}

export default Header;
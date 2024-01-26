"use client"
import Image from "next/image";
import ParticlesBackground from "./components/ParticlesBackground";



export default function Home() {
  return(
    <main className="flex-col">
      {/*Custom Header with pages*/}
      {/*Cluster image*/}
      <div className="h-[900px] w-full relative flex justify-center">
        <div 
        className="flex justify-center absolute inset-0">
            <ParticlesBackground 
            className=""/>
        </div>
        <Image src="/clusterLogo.png"
        width={500}
        height={500} 
        className="absolute top-1/4">
        </Image>
      </div>
      <div className="flex justify-center text-wrap">
        <div className="grid grid-rows-1 w-1/2 content-center">
          <article className="text-wrap">
          <p3>Hei, Maailma!</p3>
          <p className="py-10">Cluster ry on LUT-yliopiston tietotekniikan opiskelijoiden yhdistys. Cluster ry on perustettu vuonna 1985
           ja se on Suomen vanhin tietotekniikan kilta. Parhaiten clusterilaisen tunnistaa kirkkaanpunaisista
           haalareista ja mieltymyksestä keskusteluun tietokoneiden saloista.</p>

           <p>Cluster ry:n tarkoituksena on yhdistää LUT:in tietotekniikan opiskelijoita sekä tuottaa jäsenistölleen opintoihin ja vapaa-aikaan liittyviä palveluja.
            Kilta järjestää mm. rekrytilaisuuksia yhteistyössä IT-alan yritysten kanssa, excursioita ja muita pienimuotoisempia tapahtumia ja palveluja.
            Myös viihteellisempää toimintaa järjestetään silloin tällöin erilaisten bileiden muodossa.
            Cluster tekee myös tiiviisti yhteistyötä LUT:in tietotekniikan koulutusohjelman kanssa mm. opintoihin liittyvissä asioissa.</p>
           
           <p className="py-10">Clusterin virallinen irc-kanava: #cluster @ IRCnet.</p>
           
           <p>PS: Clusterin punainen on #d41f2cff tai toisin sanottuna cmyk 0 85 79 17</p>
           </article>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p>Sponsors:</p>
        <ul className="grid grid-cols-4 grid-rows-3 gap-1">
          <li>Anything you want</li>
          <li>Anything you want</li>
          <li>Anything you want</li>
          <li>Anything you want</li>
          <li>Anything you want</li>
          <li>Anything you want</li>
          <li>Anything you want</li>
          <li>Anything you want</li>
          <li>Anything you want</li>
        </ul>
      </div>



      {/*Custom Header*/}


    </main>

  );

}


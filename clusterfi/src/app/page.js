"use client"
import Image from "next/image";
import { useCallback } from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import particlesConfig from "./config/particles-config";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.


export default function Home() {
  return(
    <main className="flex justify-center height-lvh">
      {/*Custom Header with pages*/}
      {/*Cluster image*/}
      <div className="height-lvh w-1/2">
        <ParticlesBackground/>
      </div>

      {/*Custom Header*/}


    </main>

  );

}


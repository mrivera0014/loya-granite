import React from 'react'
import ParticlesConfig from '../ParticleConfig/particle-config'
import Particles from "react-tsparticles";


export default function ParticleBG() {
    return (
        <Particles params={ParticlesConfig}></Particles>
    )
}
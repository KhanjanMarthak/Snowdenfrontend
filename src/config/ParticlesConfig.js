import React from "react";
import Particles from "react-tsparticles";
import "./particle.css";
function ParticlesConfig() {
    return (
        <Particles
            params={{
                background: {
                    color: {
                        value: "#"
                    }
                },
                particles: {
                    number: {
                        value: 160,
                        density: {
                            enable: false
                        }
                    },
                    size: {
                        value: 10,
                        random: true
                    },
                    move: {
                        direction: "bottom",
                        outMode: "out"
                    },
                    links: {
                        enable: false
                    }
                },
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "remove"
                        }
                    },
                    modes: {
                        remove: {
                            quantity: 10
                        }
                    }
                }
            }}
        />
    );
}

export default ParticlesConfig;
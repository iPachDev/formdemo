'use client';
import Head from "next/head";
import {useEffect} from 'react';


export default function Home() {
    useEffect(() => {
        const scriptBefore = document.getElementById("hsformscript")
        if(scriptBefore){
          scriptBefore.remove()
        }
        const script = document.createElement('script');
        script.src='//js.hsforms.net/forms/embed/v2.js';
        script.id="hsformscript"
        document.body.appendChild(script);
        const loadEvent = (event) => {
          if('hbspt' in window){
              window.hbspt.forms.create({
                  region:"na1",
                  portalId:"43988130",
                  formId: 'd208de4e-edf3-4742-ae22-9209ea7ead0d',
                  target:"#formhb", 
                  cssClass: "hsForm"
              });
          }
        }
  
        script.addEventListener('load', loadEvent);
        return () => { script.removeEventListener('load', loadEvent) };
      }, []);

  return (<>
    <Head>
        <title>Innova Hub Group | Demo</title>
    </Head>
    <main
     className="w-fll min-h-screen"
     style={{background: '#023047'}}
    >
        <div className="lg:flex text-white">
            <div className="lg:w-1/2 h-screen">
                <div className="h-screen flex items-center justify-center">
                    <div className="w-3/4">
                        <div className="text-4xl font-light">Innova Hub Group</div>
                        <div className="text-gray-300">Innovación Digital</div>
                        <div className="mt-10 text-justify font-light">
                            En Innova Hub Group, nos especializamos en la creación de soluciones digitales para empresas y emprendedores.
                            Y hoy queremos invitarte a conocer nuestro trabajo en el próximo evento en <label className="underline">Paseo de la Reforma 1230, Ciudad de México</label> el 10 de Septiembre 2023 a las 10:00 am.
                        </div>
                        <div className="mt-10 rounded-md">
                            <iframe className="rounded-md lg:!w-full" width="560" height="315" src="https://www.youtube.com/embed/HaqrLm4RMbY?si=liJ1LdnuTLrfsk2P" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 h-screen">
                <div className="h-screen flex items-center justify-center">
                    <div className="bg-white w-3/4 rounded-md p-6 drop-shadow-md bg-opacity-60 backdrop-blur-md shadow-lg">
                        <div
                            className="text-1xl font-light text-center mb-8 text-black"
                        >Registrate Gratis y asiste al mejor evento de transformación digital.</div>
                        <div id='formhb' className="!text-white"></div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  </>)
}

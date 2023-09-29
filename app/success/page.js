import Head from 'next/head'

export default function page() {
  return (<>
    <Head>
        <title>Innova Hub Group | Demo</title>
    </Head>
    <main
     className="w-fll h-screen"
     style={{background: '#ACE1D0'}}
    >
        <div className="w-full h-screen">
            <div className="h-screen flex items-center justify-center">
                <div className="bg-white w-3/4 rounded-md p-6 drop-shadow-md bg-opacity-30 backdrop-blur-md shadow-lg">
                    <div
                        className="text-1xl font-light text-center text-gray-600"
                    >Gracias por registrarte, revisa en tu bandeja de entrada de tu correo la confirmación de tu registro, espera pronto mas noticias..</div>
                    <div className='mt-8'>
                        <img src='/img/check.png' className='w-20 mx-auto'/>
                    </div>
                </div>
            </div>
        </div>
    </main>
  </>)
}

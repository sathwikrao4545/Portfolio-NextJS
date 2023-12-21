import Head from 'next/head'



import Main from '../components/Main'

import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Sathwik Rao | Front-End Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        {/* <link rel="icon" href="" /> */}
      </Head>
    <Main />
    
    <Skills />
    
    
    </div>
  )
}

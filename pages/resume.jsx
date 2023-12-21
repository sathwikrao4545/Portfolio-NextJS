import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Sathwik Rao | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Sathwik Rao</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/sathwik-rao/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/sathwikrao4545'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
        An aspiring software engineer with a strong coding background and a
        penchant for solving challenging Tasks. Actively seeking chances in
        professional software development to contribute significantly to unique
        projects and continue to hone technical abilities.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>MongoDb
            <span className='px-2'>|</span>Node JS
           
            <span className='px-2'>|</span> RESTAPI
          </p>
          
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Projects
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Canteen Automation System
            </span>
            <span className='px-2'>| HTML, CSS, JavaScript,MySQL, PHP</span>
          </p>
          
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <p>It is a system where customers order their food and receive food in
            the canteen without any delay as they can directly go and collect
            what they ordered without waiting for a turn or waiting.</p>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            The Caffeine Rush
            </span>
            <span className='px-2'>| HTML, CSS, JavaScript, MySQL, PHP</span>
          </p>
          
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
           <p>
           The Caffeine Rush is a Coffee Shop Website where you can know about
            us, what we offer, find us and contact us about our specials and
            much more. You can also make a reservation for your table through
            the website.
           </p>
          </ul>
        </div>

        
        
      </div>
    </>
  );
};

export default resume;

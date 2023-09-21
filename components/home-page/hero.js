import React from 'react';
import classes from './hero.module.css';
import Image from 'next/image';


function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
      <Image 
      src='/images/site/olga.png'
      alt='An image showing Olga' 
      width={300} 
      height={300}/>
      </div>
      <h1>Hi, I'm Olga</h1>
      <p>
        I blog about all things interesting, more especially things that are interesting to me, and inspiring or things that give you something to think about.
      </p>
    </section>
  )
}

export default Hero

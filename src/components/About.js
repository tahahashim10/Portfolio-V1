import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const About = () => {
  const[ref, inView] = useInView({threshold: 0.5, });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div>
          <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>img</div>
          <div>
            <h2>About me.</h2>
            <h3>I'm a Computer Science student at the Univeristy of Toronto.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Unde, 
              numquam. Harum deleniti id sapiente.
            </p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  { inView ? <CountUp start={0} end={5} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>Years of <br/>Experience</div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  { inView ? <CountUp start={0} end={5} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>Years of <br/>Experience</div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  { inView ? <CountUp start={0} end={5} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>Years of <br/>Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
  
};

export default About;

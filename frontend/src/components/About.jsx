import React from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className='heading'>About US</h1>
                    <p>The only thing wee are serious about</p>
                </div>
                <p className='mid'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus est quis animi, tempore molestiae sapiente minus aut accusamus veniam sunt ducimus aliquid ullam sequi? Officia fuga libero obcaecati, rem debitis recusandae aliquid illo rerum sapiente doloremque laboriosam provident neque at velit natus repellat sunt, repudiandae voluptatibus sint. Velit, laudantium amet.</p>
                <Link to={"/"}>Explore Menu<span>
                    <HiOutlineArrowNarrowRight/>
                    </span></Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt=""about />
            </div>
        </div>
    </section>
  )
}

export default About
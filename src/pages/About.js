import React from 'react'
import MultiplePizzas from "../asserts/multiplePizzas.jpeg";
import "../components/styles/About.css";

// import { LoremIpsum } from 'lorem-ipsum';

function About() {
    // const lorem = new LoremIpsum();
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${MultiplePizzas})`}}>
          <h1> ABOUT US</h1>
          {/* <p>{lorem.generateParagraphs(1)}</p> */}
          <p>What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
           containing Lorem Ipsum passages, and more recently with desktop publishing software 
           like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className='aboutBottom'></div>
      
    </div>
  )
}

export default About

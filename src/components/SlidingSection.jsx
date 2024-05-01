import React from 'react';
import '../../sass/SlidingSection.scss'; // Ensure this is correctly imported
import cImage from '../img/c_logo.png';
import htmlImage from '../img/html.jpeg';
import cssImage from '../img/css.png';
import javaImage from '../img/java.jpeg';
import javascriptImage from '../img/javascript.jpeg';
import pythonImage from '../img/python.jpeg';
import reactImage from '../img/react.jpeg';
import reduxImage from '../img/redux.svg';

function SlidingSection() {
  const slidesContent = [
    { url: htmlImage, label: 'HTML' },
    { url: cssImage, label: 'CSS' },
    { url: javascriptImage, label: 'JavaScript' },
    { url: cImage, label: 'C Programming' },
    { url: javaImage, label: 'Java' },
    { url: pythonImage, label: 'Python' },
    { url: reactImage, label: 'React' },
    { url: reduxImage, label: 'Redux' },
  ];
  const doubledContent = [...slidesContent, ...slidesContent]; // Duplicate for seamless transition

  return (
    <div className="slider">
      <div className="slides">
        {doubledContent.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={`${item.label}-${index}`} className="slide">
            <img src={item.url} alt={item.label} />
            <div className="label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlidingSection;

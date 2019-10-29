import React from 'react';
import profileImg from './profile.png';
import './App.css';

const app =     <div className="resume">
<header className="headerBar">
  <img src={profileImg} className="profile" alt="logo" />
  <h1>Sally Student</h1>
  <p>
    Aspiring web designer loves cats.        
  </p>
  </header>
  
  <h2>Contact Me</h2>
  <a
    className="SallyPhone"
    href="9999999999"
    target="_blank"
    rel="noopener noreferrer"
  >
    999-999-9999
  </a>        
  <br/>
  <a
    className="sallyEmail"
    href="sallystudentemail@hotmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    Sallystudentemail@hotmail.com
  </a>
<section>
<h2> Education </h2>
<h3> Portland State University </h3>
<ul>
<li> Bachelors of Cat Flattery, 2015-2019 </li>
</ul>
</section>
<section>
<h2> Employment </h2>
<h3> Purrfect Date </h3> 
<ul>
<li> Lead Waifu, November 2018-Presently Employed </li>
<p>lorem ipsum dolor sit amet</p>
</ul>

<h3> Hustle Cat </h3> 
<ul>
<li>Cat Barista, January 2017-November 2018 </li>
<p>lorem ipsum dolor sit amet </p>
</ul>
</section>
</div>

function App() {
  return (app

  );
}

export default App;

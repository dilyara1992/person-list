import React from 'react';
import ReactDom from "react-dom";
import './index.css';


const Person = ({img,name,job,children}) =>{
 
 const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg` 

  return (
    <article className="person">
      <img src={url} 
      alt="person"/>

      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  )
}




const PersonList = () => {
  return <section className="person-list">
    <Person  img="33" name="John" job="developer">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat.</p>
    </Person>
    <Person  img="23" name="David" job="designer">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat.</p>
    </Person>
    <Person  img="56" name="Talgat" job="Analyst">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat.</p>
    </Person>
  </section>
}


ReactDom.render(<PersonList></PersonList>, document.getElementById('root'));
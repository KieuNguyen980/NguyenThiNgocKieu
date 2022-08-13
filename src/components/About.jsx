import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>About Us</h1>
            <p className="lead">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, debitis praesentium? Officia aspernatur neque deleniti, doloribus, alias ullam hic, incidunt laboriosam quas eveniet facere sapiente. Nihil vitae dignissimos et non porro quam! Dolorum, minima officia maxime nostrum incidunt illum odio ducimus quaerat ipsum nihil harum temporibus recusandae aliquam voluptate fugiat cum consectetur esse provident eos perferendis exercitationem, facere nobis eveniet quasi! Corporis tempore, quas sapiente rem odio ex. Quis rem animi aperiam ipsum, itaque voluptatum et aut necessitatibus cumque doloribus ratione sint eius! Beatae consequatur ipsa quas voluptatibus dolorem temporibus culpa ab iure, molestias deserunt ipsam tempora alias itaque amet.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary">Contact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/images/about.jpg" alt="About Us" height="400px" width="400px"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

import React from 'react'
import './Herohome.css'
import { Link } from 'react-router-dom'

export default function Herohome() {
  return (
    <div className="home" >
      <div className="headerContainer">
        <h1> La naturaleza en la primavera </h1>
        <p> con productos naturales</p>
        <Link to="/">
        <button className="btn-prod">Ver todos</button></Link>
       
       
      </div>
    </div>
  )
}

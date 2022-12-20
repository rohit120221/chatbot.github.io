import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import './Navbar.css'
import logonew from './logonew.png'

class Navbar extends Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render(){
        return(
            <nav className="NavbarItems">
               
               <div className="logo">
                <img src={logonew} width="350" alt="logo" />
                <br></br>
               </div> 
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item,index) => {
                    return (
                        <li key={index}><a className={item.cName} href={item.url}>
                            {item.title}
                        </a></li>
                    )
                })}
                    
                </ul>
            </nav>
        )
    }
}

export default Navbar
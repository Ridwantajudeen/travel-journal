import React from "react"
import world from "./world.png"

function Navbar(){
    return (
        <div className="navbar">
            <img src={world} alt="" className="world" />
            <h2 className="navtext">my travel journal</h2>
            
        </div>
    )
}
export default Navbar;
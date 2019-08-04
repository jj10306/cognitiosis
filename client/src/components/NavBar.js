import React from 'react';
import { IoMdHome } from 'react-icons/io';
import { FaRegEdit, FaPencilAlt } from 'react-icons/fa'
import { IconContext } from "react-icons";



const NavBar = (props) => {
    return (
        <div className="nav-container">
            <IconContext.Provider value={{ color: "#28A745", size: "45px" }}>
                    <IoMdHome />
            </IconContext.Provider>
            <div className="center">
                <img src="./brain.svg" alt="brain image" />
            </div>
            <div className="right">
                <button onClick={() => props.setIsTeaching(true)}>
                    <p>Teach</p>
                    <FaPencilAlt/>
                </button>
            </div>
        </div>
    );
}

export default NavBar;
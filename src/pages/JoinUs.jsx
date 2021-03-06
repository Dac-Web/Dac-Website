import React, {useState, useEffect} from 'react'
import Info from '../components/Info/Info'
import {Joinus} from '../components/Info/Data'

import {JoinusMember} from '../components/Info/Data'
import Navbar from '../components/Navbar/Navbar'
import { useStateValue } from "../StateProvider";
import Sidebar from '../components/SideBar/Sidebar'
import abt from "../images/aboutus.svg" 
import {db} from '../Firebase'
import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'
import {color} from '../components/Info/ColorTheme'


export const EventAddButton = styled(LinkR)`

    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    position: sticky;
    bottom:5%;
    left:95%;
    z-index:10;
    background: ${color.Blue};
    white-space: nowrap;
    color: #fff;
    font-size: 40px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: ${color.Blue};
    }

    @media (max-width: 1366px) {
        display : none;
    }

    @media (max-width: 1024px) {
        display : none;

    }
`

function Join() {
    const [isOpen, setIsOpen] = useState(false)
    const [{ role }, dispatch] = useStateValue();
    const [registerlink, setRegisterlink] = useState("");
    const [available, setAvailable] = useState("");
    
  
    useEffect(() => {
      getState();
      console.log("Role of user is",role)
    }, [])
  
    function getState() {
      db.collection('Registeration').doc("Enrollment").get().then(doc => {
        if(doc.exists){
          setAvailable(doc.data().available);
          console.log("This is the available data inside get state",doc.data().available)
          setRegisterlink(doc.data().link);
          // console.log("This is the available data inside get state",doc.data().link)
          
        }
      })
    }

    const toggle = () =>{
    console.log("Button is clicked");
    setIsOpen(!isOpen);
    }

    const JoinusAvailable = {
        id: 'Joinus',
        lightBg: false,
        lightText: true,
        lighttextDesc: true,
        topLine: 'Data Analytics Club',
        headline: 'Join Us',
        description: "Provide the details in the link below to join the club.",
        buttonLabel: 'Join Us',
        imgStart: false,
        img: abt,
        alt: 'join us',
        dark: true,
        primary: true,
        darkText: false,
        link: null,
        link2: registerlink
      };
    return (
        <div style={{backgroundColor:color.Navy}}>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            {role === "U" ? 
            available === "OFF" ? <Info {...Joinus}/> : <Info {...JoinusAvailable}/>
            : <Info {...JoinusMember}/>}
            {role === 'A' ? <EventAddButton to="/JoinUs/Admin">+</EventAddButton> : <div/>}

        </div>
    )
}

export default Join
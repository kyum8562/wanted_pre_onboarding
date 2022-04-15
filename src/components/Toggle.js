import React, {useState} from 'react';
import '../App.css';

function Toggle(){
    const [toggle, setToggle] = useState('OFF');
    
    const clickedToggle = () =>{
        const button = document.getElementById('btn');
        if(toggle === 'OFF') setToggle((v) => 'ON');
        else setToggle((v) => 'OFF');
        console.log(button);
    }
    return(
        <div>
            <button 
                id = "btn"
                className ={toggle}
                onClick={clickedToggle}
            >기본</button>
        </div>
    );
}

export default Toggle;
import React, {useState} from 'react';
import '../App.css';

function Toggle(){
    const [toggle, setToggle] = useState('OFF');
    
    const clickedToggle = () =>{
        const button = document.getElementById('btn');
        if(toggle === 'OFF'){
            setToggle((v) => 'ON');
            button.innerText = '상세2';
        } 
        else{
            setToggle((v) => 'OFF');
            button.innerText = '기본1';

        } 
        console.log(button);
    }
    const clickRadio = (e) => {
        console.log(e.target.value)
        
    }
    return(
        <div>
            <button 
                id = "btn"
                className ={toggle}
                onClick={clickedToggle}
            >기본1</button>

            <div className='radio'>
                <input 
                    type='radio'
                    id='radio1'
                    name='radio' 
                    onClick={clickRadio}/>
                    <label htmlFor="radio1">기본2</label>
                <input 
                    type='radio'
                    id='radio2'
                    name='radio' 
                    onClick={clickRadio}/>
                    <label htmlFor ="radio2">세부2</label>

            </div>
        </div>
    );
}

export default Toggle;
import React, {useState} from 'react';
import '../css/Dropdown.css';

function Dropdown(){
    const dropdown = document.querySelector('.dropdown');
    const toggleBtn = document.querySelector('.dropdown-toggle');
    const list = document.querySelector('.dropdown-list');
    const options = document.querySelectorAll('.dropdown-option');
    const [selected, setSelected] = useState(0);
    const onClickSelected = (e) => {
        list.classList.toggle('show');
    }

    return(
        <div>
            <form action=''>
                <div className='dropdown'>
                    <button type='button'
                            className='dropdown-toggle'
                            onClick={onClickSelected}>All Symbols ▽</button>
                
                    <ul className='dropdown-list'>
                        <li className='dropdown-item'> 
                            <button type="button" value="0" className='dropdown-option'>All Symbols</button>
                        </li>
                        <li className='dropdown-item'> 
                            <button type="button" value="1" className='dropdown-option'>BTCUSD.PERP</button>
                        </li>
                        <li className='dropdown-item'> 
                            <button type="button" value="2" className='dropdown-option'>ETHUSD.PERP</button>
                        </li>
                        <li className='dropdown-item'> 
                            <button type="button" value="3" className='dropdown-option'>BCHUSD.PERP</button>
                        </li>
                        <li className='dropdown-item'> 
                            <button type="button" value="4" className='dropdown-option'>LTCUSD.PERP</button>
                        </li>
                        <li className='dropdown-item'> 
                            <button type="button" value="5" className='dropdown-option'>XRPUSD.PERP</button>
                        </li>
                        <li className='dropdown-item'> 
                            <button type="button" value="5" className='dropdown-option'>BATUSD.PERP</button>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    );
}

export default Dropdown;
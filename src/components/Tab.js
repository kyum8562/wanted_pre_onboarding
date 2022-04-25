import React, {useState} from 'react';
import '../css/Tab.css';

function Tab(){

const [id, setId] = useState(1);
const clickHandler = (idx) => {
    setId(idx);
}

    return(
        <div className='App'>
            <div className='container'>
                <ul className='list'>
                    <li className={id === 1 ? 'tab current' : 'tab'} 
                        onClick={() => clickHandler(1)}>감자
                    </li>
                    <li className={id === 2 ? 'tab current' : 'tab'}
                        onClick={() => clickHandler(2)}>고구마
                    </li>
                    <li className={id === 3 ? 'tab current' : 'tab'} 
                        onClick={() => clickHandler(3)}>카레라이스
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Tab;
import React, {useState} from 'react';
import '../css/Toggle.css';
function Toggle(){

    const [theme, setTheme] = useState(false);
    const themeToggle = () => {
      setTheme(!theme);
    }

    return(
        <div className = {theme ? 'default' : 'detail'}>
            <div className='container'>
                <div className='switch-checkbox'>
                    <label className = 'switch'>
                        <input type='checkbox' 
                            onChange={themeToggle}
                        />
                        <span className ="slider round"></span>
                        <h1 className='t1'></h1>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Toggle;
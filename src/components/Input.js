import React, {useState} from 'react';
import '../css/Input.css';

function Input(){
    const [email, setEmail] = useState('');
    const [isEmail, setIsEmail] = useState(false);
    const emailRegex =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const onChangeEmail = (e) => {
        const emailCurrent = e.target.value;
        setEmail(emailCurrent);
        if(!emailRegex.test(emailCurrent)){
            setIsEmail(false);
        }
        else{
            setIsEmail(true);
        }
    }
    console.log(email + ":" , isEmail);
    return(
        <div className='container'>
            <div className='input-box'>
                <div className='email-box'>
                    <caption>Email</caption>
                    <input type='email'
                        placeholder='E-mail'
                        className='email'
                        onChange={onChangeEmail}/>
                </div>
                <div className='password-box'>
                    <caption>Password</caption>
                    <input type='password'
                        placeholder='Password'
                        className='password' />
                </div>
            </div>
        </div>
    );
}

export default Input;
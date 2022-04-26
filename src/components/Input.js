import React, {useState} from 'react';
import '../css/Input.css';

function Input(){
    // 이메일
    const [email, setEmail] = useState('');
    const [isEmail, setIsEmail] = useState(false);
    const emailRegex =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const onChangeEmail = (e) => {
        const emailCurrent = e.target.value;
        setEmail(emailCurrent);
        if(!emailRegex.test(emailCurrent)) setIsEmail(false);
        else setIsEmail(true);
    }

    // 패스워드
    const [pwd, setPwd] = useState({type: 'password', visible: false})
    const onClickBtn = (e) => {
        if(pwd.type === 'password') setPwd({type: "text", visible:true});
        else setPwd({type: "password", visible:false});
    }
    // console.log(email + ":" , isEmail);
    return(
        <div className='container'>
            <div className='input-box'>
                <div className='email-box'>
                    {/* <caption>Email</caption> */}
                    <input type='email'
                        placeholder='E-mail'
                        className='email'
                        onChange={onChangeEmail}/>
                </div>
                <div className='password-box'>
                    {/* <caption>Password</caption> */}
                    <input type={pwd.type}
                        placeholder='Password'
                        className='password'>
                    </input>
                    <div className='img-box'
                        onClick={onClickBtn}>
                        {/* {pwd.visible ?
                        <img id='i1' src={require('../img/show.png')} /> : 
                        <img id='i2' src={require('../img/hidden.png')}/>}                        */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Input;
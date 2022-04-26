import React, {useState} from 'react';
import '../css/Input.module.css';

function Input(){
    // 이메일
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
                    <p>E-mail</p>
                    <input type='email'
                        placeholder='E-mail'
                        className='email'
                        onChange={onChangeEmail}/>
                    <div className='validation-box'>
                        {!isEmail ? <h4>Invaild e-mail address.</h4> : <h4>　</h4>}
                    </div>
                    <div className='img-box1'>
                        {!isEmail ?
                         <img id='i0' src={require('../img/uncheck.png')} /> : 
                         <img id='i1' src={require('../img/check.png')}/>}   
                    </div>
                </div>
                <div className='password-box'>
                    <p>Password</p>
                    <input type={pwd.type}
                           placeholder='Password'
                           className='password'>
                    </input>
                    <div className='img-box2'
                         onClick={onClickBtn}>
                         {pwd.visible ?
                         <img id='i2' src={require('../img/show.png')} /> : 
                         <img id='i3' src={require('../img/hidden.png')}/>}                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Input;
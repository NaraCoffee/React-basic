import React from 'react'
import './Main.css'
const Main = () => {

    const user ={
        name :'Nara_Coffee',
        isLogin:false
    }
    if(user.isLogin){
        return <button className='logout'>로그아웃</button>
    }else{

        return <button className='login'>로그인</button>
    }

    return (
        <div>
            {user.isLogin? 
            <button className='logout'>로그아웃</button> : 
            <button className='login'>로그인</button>}
        </div>
    )
}

export default Main
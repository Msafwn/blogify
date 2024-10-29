import React,{useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate } from 'react-router-dom'


export default function Protection({childern , authentication= true}) {
    const navigate = useNavigate();
    const authstatus = useSelector((state) => state.auth.status)
    const [loader, setloader] = useState(true)

    useEffect(() => {
        
            if (authentication && authstatus !== authentication) {
                navigate('/signIn');
            }else if (authentication && authstatus !== authentication){
                navigate('/')
            }
     setloader(false);
    },[authstatus,navigate, authentication])

  return loader ? <h1>Loging...</h1> : <>{childern}</>


}

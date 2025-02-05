import React, { useEffect, useState } from 'react';
import useRequest from '../hooks/call';
import { sendRequest } from '../calls/request';
import Swal from 'sweetalert2';


const Example = () => {
    const {data,error,loading} = useRequest({
        url:"/api/v1/login/" ,
        method:"POST",
        params:{
            page:"1"
        },
        data:{
            "email_or_phone":number,
            "password":"963215"
        }
    },[number])
    useEffect(()=>{
        if (error){
            Swal.fire({
                title: 'Auto close alert!',
                text: error.message,
                timer: 2000
              })
        }
    },[error])
    return (

        <div className='example'> 
            {
                loading ? <label>loading...</label> : null
            }
            {
                data ? <label>{JSON.stringify(data)}</label> : null
            }
            
        </div>
    );
}

export default Example;

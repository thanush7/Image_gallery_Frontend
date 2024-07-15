import React from 'react'
import './Contact.css'
import { useState } from 'react'
import { useContext } from 'react'
import { storeContext } from '../../StoreContext/StoreContext'
import axios from 'axios'
import {toast} from 'react-toastify'
import { useEffect } from 'react'
const Contact = () => {
    const { url } = useContext(storeContext);
    const [fdata, fsetData] = useState({
        name: "",
        email: "",
        subject: "",
        phone: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        fsetData(fdata => ({ ...fdata, [name]: value }));
    }
    
    const onSubmitHandler = async (event) => {
        event.preventDefault();
       
        try{
            const response = await axios.post(`${url}/api/order/contact`, fdata);
            // console.log(response.data);
        if (response.data.success) {
            fsetData({
                name: "",
                email: "",
                subject: "",
                phone: ""
            })
            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
        }
        else {
            toast.error('error', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
        }
        }
        catch(error)
        {
            console.log(error);
        }
    }


    return (
        <div>
        <form onSubmit={onSubmitHandler} className='contact-container'>
                <div className="details">
                    <input type="text" onChange={onChangeHandler} name='name' value={fdata.name} placeholder='Your Name' />
                    <input type="email" onChange={onChangeHandler} name='email' value={fdata.email} placeholder='Your Email' />
                </div>
                <div className="detail">
                    <input type="text" onChange={onChangeHandler} name='subject' value={fdata.subject} placeholder='Subject' />
                    {/* <textarea name="message" onChange={onChangeHandler} value={fdata.message} placeholder='short message'/> */}
                    {/* <input maxLength={250} type="text" placeholder='message' /> */}
                    <input type="text" onChange={onChangeHandler} name='phone' value={fdata.phone} placeholder='Phone Number' />
                </div>
                <button type='submit' >Send</button>
            </form>
        </div>
    )
}

export default Contact
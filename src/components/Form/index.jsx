import React, { useState } from 'react'

export default function Form() {
    const [form, setForm] = useState({});
    const [error, setError] = useState();
    const handleChangeName = (ev) => {
        setForm({...form, name:ev.target.value})
    }
    const handleChangePhone = (ev) => {
        setForm({...form, phone:ev.target.value})
    }
    const handleButton = (ev) => {
        console.log(form);
        if(!form.name){
            setError({...error, mess:"NOT"})
        }
        console.log(first)
    }
    return (
    <div>
        <p>Ho&Ten</p>
        <input type="text" onChange={handleChangeName}/>
        {error?.mess && error.mess   }
        <p>So Dien Thoai</p>
        <input type="text" onChange={handleChangePhone}/>
        <br />
        <button onClick={handleButton}>Submit</button>
    </div>
  )
}

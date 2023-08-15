import React from 'react'
import style from './Contact.module.css'
const Contact = () => {
  return (
    <div className={style.contactContainer} id='contact'>
      <input placeholder="Name"className={`${style.input} ${style.name}`} name="name" type="text"></input>
      <input placeholder="Phone" className={`${style.input} ${style.phone}`} name="phone" type="number"></input>
      <input placeholder="" className={`${style.input} ${style.msg}`} name="msg" type="text"></input>
    </div>
  )
}

export default Contact
import styles from "./contactform.module.css"
import Button from "../buttons/Button"
import { MdOutlineMail } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import {useState} from 'react'


export default function Contactform() {
  const[name,setName]=useState();
  const[email,setEmail]=useState();
  const[text,setText]=useState();
     const onSubmit=(event)=>
     {
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
     }


 
  return (
    <section className={`${styles.container}`}>
        <div className={`${styles.contact_form}`}>
            <div className={`${styles.button_prim}`}>
             <Button 
            
              isoutline={false}  text="Via Support text" icon={< MdMessage fontSize="24px"/>}/>
             <Button  isoutline={false} text="Via Call" icon={<IoCall fontSize="24"/>}/>
            </div>
            <Button  isoutline={true}
              text="Via Email Form" icon={<MdOutlineMail fontSize="24px"/>}
             />

            <form onSubmit={onSubmit}>
            <div className={`${styles.form_contrl}`}>
            <label htmlFor="name"> Name</label>
              <input  type="text"  name="name"/>  
            </div>
            <div className={`${styles.form_contrl}`}>
            <label htmlFor="Email"> Email</label>
              <input  type="Email"  name="Email"/>  
            </div>
            <div className={`${styles.form_contrl}`}>
            <label htmlFor="text">Text</label>
              <textarea type="text" rows="8" name="text"/>  
            </div>
            
           <div style={{display:"flex",justifyContent:"end"}}>
           <Button isoutline={false} text="Submit" />
           </div>
           {/* <div> {name+"    "+email+" "+text}</div> */}
            </form>
        </div>
        
        <div className={`${styles.image}`}>
          <img src="/images/contact.svg" alt="conatct image"></img>
        </div>

    </section> 
  )

}
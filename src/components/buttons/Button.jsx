import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import styles from  "./button.module.css"

export default function Button({isoutline,icon,text,...rest}){
 
  return (
   <div>
    <button {...rest} className={isoutline? styles.outline_btn:styles.primary_btn}>
       {icon}
       {text}
    </button>
   </div> 
  )
}


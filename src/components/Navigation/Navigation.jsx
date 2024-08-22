import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
     <nav className ={`${styles.navigation} container`}>
        <div>
            <img src="/images/frame.png "  alt="Do some coding"></img>
        </div>
        <ul>
            <li >Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
     </nav>
  )
}

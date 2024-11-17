import styles from "./NavBar.module.css"

export function NavBar() {
    return (
        
        <nav className={styles.container}> 
 
                <h1 className="text-4xl italic"> Blog</h1>
                <ul className={styles.listItems}>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Support">Support</a></li>
                </ul>  
        </nav> 
    
    ); 

}
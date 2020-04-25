import React, { useState } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./menu.module.css" 

export const Menu = () => {
    const [isExpanded, toggleExpansion] = useState(false);
    const closeMenu = () => toggleExpansion(false);

    return <div >
        {isExpanded ? <div className={styles.menuBackground}>
            <div className={styles.menuContainer}>
                <FontAwesomeIcon 
                    icon={["fas","times"]} 
                    size="2x"
                    color="orange"
                    style={{cursor: "pointer"}}
                    className={styles.closeIcon}
                    onClick={() => toggleExpansion(!isExpanded)} />
                <ul style={{listStyle: "none", margin: 0, textAlign: "center", paddingTop: "20px"}}>
                    <li><Link to="/" onClick={closeMenu} className={styles.menuItem}>Home</Link></li>
                    <li><Link to="/cursos" onClick={closeMenu} className={styles.menuItem}>Cursos</Link></li>
                    <li><Link to="/formacao" onClick={closeMenu} className={styles.menuItem}>Formação</Link></li>
                    <li><Link to="/professores" onClick={closeMenu} className={styles.menuItem}>Professores</Link></li>
                    <li><Link to="/software" onClick={closeMenu} className={styles.menuItem}>Software</Link></li>
                </ul>
            </div>
        </div> : 
        <FontAwesomeIcon 
            icon={["fas","bars"]} 
            size="2x"
            color="orange"
            style={{cursor: "pointer"}}
            onClick={() => toggleExpansion(!isExpanded)} />
        }
    </div>
}
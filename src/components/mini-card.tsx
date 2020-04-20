import React from "react"
import styles from "./mini-card.module.css" 
import { navigate } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const MiniCard = ({title, date, time, teacher, id}) => {
  const href = `mailto:astrologia@regulus.com.br?subject=${title} - ${date} - ${time}&body=Desejo me inscrever na turma.`;
    return <div className={styles.card}>
        <div className={styles.main}>
            <p><FontAwesomeIcon icon={["fa","calendar-alt"]} fixedWidth={true}></FontAwesomeIcon> {date}</p>
            <p><FontAwesomeIcon icon={["fa","clock"]} fixedWidth={true}></FontAwesomeIcon> {time}</p>
            <p><FontAwesomeIcon icon={["fa","chalkboard-teacher"]} fixedWidth={true}></FontAwesomeIcon> {teacher}</p>
        </div>
        <div className={styles.cardBottom}>
           <a href={href}
           className={styles.link}>Se inscrever</a> 
        </div>
    </div>
}

export default MiniCard;
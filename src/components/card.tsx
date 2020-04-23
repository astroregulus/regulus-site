import React from "react"
import styles from "./card.module.css"
import { navigate } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//const styles = require("./card.module.css")
type layoutType = 'card' | 'mini-card';

interface CardProps {
  date: string
  time: string
  teacher: string
  id: string
  title:string
  layout: layoutType
}

const Card = ({title, date, time, teacher, id, layout }: CardProps) => {
  const isLayoutCard = layout === "card";
  const onClick = isLayoutCard ? () => navigate(`/cursos/${id}`) : () => {};
  const href = `mailto:astrologia@regulus.com.br?subject=${title} - ${date} - ${time}&body=Desejo me inscrever na turma.`;
    return <div className={[styles.container, isLayoutCard ? styles.card : styles.miniCard].join(' ')}>
        <div className={[styles.main, isLayoutCard ? styles.card : styles.miniCard].join(' ')} 
              onClick={onClick}>
            {layout === "card" && <h3>{title}</h3>}
            <p><FontAwesomeIcon icon={["fas","calendar-alt"]} fixedWidth={true}></FontAwesomeIcon> {date}</p>
            <p><FontAwesomeIcon icon={["fas","clock"]} fixedWidth={true}></FontAwesomeIcon> {time}</p>
            <p><FontAwesomeIcon icon={["fas","chalkboard-teacher"]} fixedWidth={true}></FontAwesomeIcon> {teacher}</p>
        </div>
        <div className={styles.cardBottom}>
           <a href={href}
           className={styles.link}>Se inscrever</a> 
        </div>
    </div>
}


export default Card;
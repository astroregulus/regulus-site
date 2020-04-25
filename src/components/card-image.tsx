import React, { CSSProperties } from "react"
import { navigate } from "gatsby"
import styles from "./card-image.module.css" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props {
    image: any
    text: string
    title: string
    navigateTo?: string
    externalLink?: string
}

const estiloDiv: Partial<CSSProperties> = {
    backgroundColor: "#011830",
    opacity: "0.8",
    position: "absolute",
    bottom: "5px", 
    width: "35%",
    color: "white",
    padding: "5px",
}

export const CardImage = (props: Props) => {
    const onClick = props.navigateTo    ? () => navigate(props.navigateTo!)
                                        : () => window.open(props.externalLink, "_blank");
    return <div className={styles.card} onClick={onClick}> 
                <div style={{position: "relative"}}>
                    <div style={estiloDiv}>
                        <p>{props.title}</p>
                    </div>
                    <img src={props.image} alt="" style={{margin:0, width:"100%"}}/>
                </div>
                <div className={styles.cardBottom}>
                    <p>{props.text}</p>
                </div>
                <div style={{display: "flex", justifyContent:"flex-end", paddingRight:"5px", paddingBottom:"5px", position: "absolute", bottom:"0px", right:"0px"}}>
                    <FontAwesomeIcon icon={["fas","arrow-circle-right"]} size="lg"></FontAwesomeIcon>
                </div> 
            </div>
}
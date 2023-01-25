import Image from "next/image"
import imagem_leo from '../images/leonardo_lemos.png'
import imagem_nina from '../images/nina.png'
import imagem_josana from '../images/josana.png'

export enum Professor {
    Josana = 'Josana Camilo',
    Leonardo = 'Leonardo Lemos',
    Nina = 'Nina MF Alves'
}

interface Propriedades {
    professor: Professor
}


export default function ImagemProfessor({professor} : Propriedades) {
    const retornaImagem = () => {
        switch (professor) {
            case Professor.Josana:
                return imagem_josana
            case Professor.Leonardo:
                return imagem_leo
            case Professor.Nina:
                return imagem_nina
            default:
                break;
        }
    }
       
    return <Image src={retornaImagem()}
    alt={professor}
    width={64}
    height={64}
    className="ml-auto"/>
}
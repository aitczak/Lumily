import { PropsWithChildren } from "react";
import {CardProps} from '../types'




const Card = ({children}: PropsWithChildren<CardProps>) => {

    return (
        <section>
            <h2>card component</h2>
            {children}
        </section>
     
    )
}

export default Card
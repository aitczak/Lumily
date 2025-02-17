import { PropsWithChildren } from "react";
import {CardProps} from '../types'


//this is top level,, holds children components

const Card = ({children}: PropsWithChildren<CardProps>) => {

    return (
        <section>
            <h2>card component</h2>
            {children}
        </section>
     
    )
}

export default Card
import {PlacesListProps } from '../types'
import Cities from './CitiesList'
import Card from './Card'

const Places: React.FC<PlacesListProps> = ({places}) =>{

    return (
        <div><Card>
            <h2>my card wrapper</h2>
            <h2>{places.map((place)=> <div key="{places.id}"> {place.id}<h1>{place.name}</h1></div>)}</h2></Card></div>
    )
}


export default Places;



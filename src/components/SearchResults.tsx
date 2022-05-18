import { useContext, useState } from "react"
import { MapContext, PlacesContext } from "../context"
import { LoadingPlace } from "."
import { Feature } from "../interface/places"


export const SearchResults = () => {
    const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext)
    const { map, getRouteBetweenPoints } = useContext(MapContext)
    const [activePlaceId, setActivePlaceId] = useState('')

    const onPlaceClick = (place: Feature) => {
        const [lng, lat] = place.center
        setActivePlaceId(place.id)
        map?.flyTo({
            zoom: 14,
            center: [lng, lat]
        })
    }

    const getRoute = (place: Feature) =>{
        if (!userLocation) return;
        const [lng, lat] = place.center;
        getRouteBetweenPoints(userLocation, [lng, lat]);
    }

    if (isLoadingPlaces) {
        return <LoadingPlace />
    }
    if (places.length === 0) {
        return <></>
    }
    

    return (
        <ul className="list-group mt-3">
            {
                places.map(place => (
                    <li
                        className={`list-group-item list-group-item-action pointer${(place.id === activePlaceId) ? ' active' : ''}`}
                        key={place.id}
                        onClick={() => onPlaceClick(place)}
                    >
                        <h6>{place.text_es}</h6>
                        <p style={{ fontSize: '12px' }}>
                            {place.place_name_es}
                        </p>
                        <button 
                            onClick={() => getRoute(place)}
                            className={`btn btn-sm ${activePlaceId === place.id ? 'btn-outline-light' : 'btn-outline-primary'}`}>
                            Direcciones
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}

import { Feature } from "../../interface/places";
import { PlaceState } from "./PlacesProvider";

type PlaceAction =
    | { type: 'setUserLocation', payload: [number, number] }
    | { type: 'setPlace', payload: Feature[] }
    | { type: 'setLoadingPlaces' }
export const placeReducer = (state: PlaceState, action: PlaceAction): PlaceState => {

    switch (action.type) {
        case 'setUserLocation':
            return {
                ...state,
                isLoading: false,
                userLocation: action.payload
            }
        case 'setLoadingPlaces':
            return {
                ...state,
                isLoadingPlaces: true,
                places: []
            }
        case 'setPlace':
            return{
                ...state,
                isLoadingPlaces: false,
                places: action.payload
            }
        default:
            return state;
    }

}
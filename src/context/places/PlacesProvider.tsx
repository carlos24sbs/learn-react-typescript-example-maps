import { useEffect, useReducer } from "react"
import { searchApi } from "../../apis"
import { getUserLocation } from "../../helpers"
import { PlacesContext } from "./PlacesContext"
import { placeReducer } from "./placesReducer"

import { Feature, PlacesResponse } from "../../interface/places"

export interface PlaceState {
    isLoading: boolean;
    userLocation?: [number, number];
    isLoadingPlaces: boolean;
    places: Feature[];
}

const INITIAL_STATE: PlaceState = {
    isLoading: true,
    userLocation: undefined,
    isLoadingPlaces: false,
    places: [],
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(placeReducer, INITIAL_STATE)

    useEffect(() => {
        getUserLocation().then(lngLat => dispatch({ type: 'setUserLocation', payload: lngLat }));
    }, [])

    const searchPlaceByTerm = async (query: string):  Promise<Feature[]> => {
        if (query.length === 0) {
            dispatch({type: 'setPlace', payload: []})
            return [];
        } // clear all
        if (!state.userLocation) throw new Error('Ubication do not exist')

        dispatch({type: 'setLoadingPlaces'});
        const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, { params: { proximity: state.userLocation.join(',') } });
        dispatch({type: 'setPlace', payload: resp.data.features})
        return resp.data.features;
    }

    return (
        <PlacesContext.Provider value={{
            ...state,
            //Methods
            searchPlaceByTerm,
        }}>
            {children}
        </PlacesContext.Provider>
    )
}

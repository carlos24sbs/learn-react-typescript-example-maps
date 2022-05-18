import { createContext } from "react";
import { Feature } from "../../interface/places";

export interface PlacesContextProps {
    isLoading: boolean;
    userLocation?: [number, number];
    //Methods
    searchPlaceByTerm: (query: string) => Promise<Feature[]>;
    isLoadingPlaces: boolean;
    places: Feature[];
}

export const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps);
import { ChangeEvent, useContext, useRef } from "react"
import { PlacesContext } from "../context"
import { SearchResults } from "."


export const SearchBar = () => {
    const debounceRef = useRef<NodeJS.Timeout>()
    const { searchPlaceByTerm } = useContext(PlacesContext)

    const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
        if (debounceRef.current)
            clearTimeout(debounceRef.current)

        debounceRef.current = setTimeout(() => {
            searchPlaceByTerm(event.target.value)
            console.log('debounced value:', event.target.value);
        }, 500)
    }


    return (
        <div className="search-container">
            <input type={'text'} className='form-control' placeholder="Search place.." onChange={onQueryChanged} />
            <SearchResults />
        </div>
    )
}

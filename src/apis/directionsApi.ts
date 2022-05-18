import axios from "axios";

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiY2xvdWRzcGFiYSIsImEiOiJjbDM3empxZmkzb3pmM2RvNTU3cHJmZG8xIn0.QXEUH0HeyVGQMRvgHkzegw',
    }
})

export default directionsApi;
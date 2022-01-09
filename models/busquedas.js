const axios = require('axios');


class Busquedas {
    historial = ['Tegucigalpa', 'Madrid', 'San José'];

    constructor() {
        //leer DB si exite
    }

    get paramsMapbox() {
        return {
            'access_token': 'pk.eyJ1IjoicmljcGVyZXpyb2RyaWd1ZXoiLCJhIjoiY2t5N3I1cGw2MThyYjJvcW5kbTVzbXRnMSJ9.q2BCupPHoI_WKQRuyzr2fg',
            'limit': 5,
            'language': 'es'
        }
    }


    async ciudad( lugar= '' ) {
        try {
            //peticion http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar}.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get()

            console.log('hola', resp.data );

            return[];
        } catch (error) {
            return [];
        }

        return []; //retornar los lugares
    }
}


module.exports = Busquedas;
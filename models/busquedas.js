const axios = require('axios');
require('dotenv').config()

class Busquedas {
    historial = ['Tegucigalpa', 'Madrid', 'San José'];

    constructor() {
        //leer DB si exite
    }

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
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
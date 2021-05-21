import axios from "axios";
var random = Math.floor(Math.random() * 238);
let paginado = 0;
let paginado2 = 0;
let paginado3 = 0;
let paginado4 = 0;

export const home = () => {
	return function (dispatch) {
		return axios
			.get(`http://localhost:4001/countries?offset=${random}`)
			.then((res) => {
				dispatch({ type: "SHOW_COUNTRIES", payload: res.data });
			})
			.catch((err) => {
				console.log("error en el axios", err);
			});
	};
};

export const getData = (idPais) => {
	return function (dispatch) {
		return axios
			.get(`http://localhost:4001/countries/${idPais}`)
			//, {transformResponse: (res) => { return res; }, responseType: 'json'}
            .then((res) => {				
				console.log('res data :', res.data);
				dispatch({ type: "GET_DATA_COUNTRY", payload: [res.data] });
			})
            .catch((err) => {
                console.log("error en axios get", err);
            });
	}
}

export const orderAZ = (Norestart) => {
	if (!Norestart) paginado = 0;
	return function (dispatch) {
		return axios
			.get(`http://localhost:4001/countries?offset=${paginado}`)
			.then((res) => {
				dispatch({ type: "ORDER_COUNTRIES_AZ", payload: res.data });
			})
			.catch((err) => {
				console.log("error en el axios", err);
			});
	};
};
export const orderZA = (Norestart) => {
	if (!Norestart) paginado2 = 0;
	return function (dispatch) {
		return axios
			.get(`http://localhost:4001/countries?order=DESC&offset=${paginado2}`)
			.then((res) => {
				dispatch({ type: "ORDER_COUNTRIES_ZA", payload: res.data });
			})
			.catch((err) => {
				console.log("error en el axios", err);
			});
	};
};
export const poblacionAS = (Norestart) => {
	if (!Norestart) paginado3 = 0;
	return function (dispatch) {
		return axios
			.get(`http://localhost:4001/countries?order=POPASC&offset=${paginado3}`)
			.then((res) => {
				dispatch({ type: "ORDER_POPULATION_AS", payload: res.data });
			})
			.catch((err) => {
				console.log("error en el axios", err);
			});
	};
};

export const poblacionDS = (Norestart) => {
	if (!Norestart) paginado4 = 0;
	return function (dispatch) {
		return axios
			.get(`http://localhost:4001/countries?order=POPDESC&offset=${paginado4}`)
			.then((res) => {
				dispatch({ type: "ORDER_POPULATION_DS", payload: res.data });
			})
			.catch((err) => {
				console.log("error en el axios", err);
			});
	};
};

export const buscador = (PaisBuscado) => {
    return function (dispatch) {
        return axios
            .get(`http://localhost:4001/countries?name=${PaisBuscado}`)
            .then( (res) => {
                console.log('res :', res);
                dispatch({ type: 'SEARCH_COUNTRY', payload: res.data });
            })
            .catch((err) => {
                dispatch({ type: 'DONT_COUNTRY', payload: [{name:'ERROR 404: COUNTRY NOT FOUND'}] })
            });
    }
};

export const filtradoContinente = (continente) => {
	return {
		type: 'FILTRADO_CONTINENTE', payload: continente
	}
};

export const next = (orden) => {
	switch (orden) {
		case "A_to_Z":
			if (paginado < 239) paginado += 12;
			return orderAZ("No Restart");
		case "Z_to_A":
			if (paginado2 < 239) paginado2 += 12;
			return orderZA("No Restart");
		case "poblacionAS":
			if (paginado3 < 239) paginado3 += 12;
			return poblacionAS("No Restart");
		case "poblacionDS":
			if (paginado4 < 239) paginado4 += 12;
            return poblacionDS("No Restart");
		default:
			random = Math.floor(Math.random() * 238);
			return home();
	}
};

export const prev = (orden) => {
	switch (orden) {
		case "A_to_Z":
			if (paginado > 11) paginado -= 12;
			return orderAZ("No Restart");
		case "Z_to_A":
			if (paginado2 > 11) paginado2 -= 12;
			return orderZA("No Restart");
		case "poblacionAS":
			if (paginado3 > 11) paginado3 -= 12;
			return poblacionAS("No Restart");
		case "poblacionDS":
			if (paginado4 > 11) paginado4 -= 12;
            return poblacionDS("No Restart");
		default:
			random = Math.floor(Math.random() * 238);
			return home();
	}
};

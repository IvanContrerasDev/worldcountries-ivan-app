let initialState = 
{
estadoFiltro: [],
estadoOrden: 'order',
estadoPaises: [
	{name: 'Argentina', region:'América', flag:'https://restcountries.eu/data/arg.svg'},
	{name: 'Afghanistan', region:'Asia', flag:'https://restcountries.eu/data/afg.svg'},
	{name: 'Albania', region:'Europe', flag:'https://restcountries.eu/data/alb.svg'},
]}

const reducers = (state = initialState, action) => {
	switch (action.type) {
		case "SHOW_COUNTRIES":
			return {
				...state,
				estadoOrden: 'aleatorio',
				estadoPaises: action.payload
			};
		case "GET_DATA_COUNTRY":
			return {
				...state,
				estadoOrden: 'aleatorio',
				estadoPaises: action.payload[0]
			};
		case "ORDER_COUNTRIES_AZ":
			return {
				...state,
				estadoOrden: 'A_to_Z',
				estadoPaises: action.payload
			};
		case "ORDER_COUNTRIES_ZA":
			return {
				...state,
				estadoOrden: 'Z_to_A',
				estadoPaises: action.payload
			};
		case "ORDER_POPULATION_AS":
			return {
				...state,
				estadoOrden: 'poblacionAS',
				estadoPaises: action.payload
			};
		case "ORDER_POPULATION_DS":
			return {
				...state,
				estadoOrden: 'poblacionDS',
				estadoPaises: action.payload
			};
		case "SEARCH_COUNTRY":
			return {
				...state,
				estadoOrden: 'busqueda',
				estadoPaises: action.payload
			};
		case "DONT_COUNTRY":
			return {
				...state,
				estadoOrden: 'no_encontrado',
				estadoPaises: action.payload
			}
		case "FILTRADO_CONTINENTE":
			return{
				...state,
				estadoOrden: '',
				estadoFiltro: state.estadoPaises.filter( (pais) =>  pais.region === action.payload )
			};
		default:
            return state;
	}
};

export default reducers;

import axios from 'axios';

const initialState = {
    characters:[],
    loading: false
}

const GET_CHARACTERS = 'GET_CHARACTERS';

export function getCharacters(){
    const characterArr = axios.get("https://pokeapi.co/api/v2/pokemon/1/")
                              .then(res => res.data)
                              .catch(err=>err.message);

    return {
        type: GET_CHARACTERS,
        payload: characterArr
    }
}

export default function starWarsReducer(state = initialState, action){
    const {type,payload} = action;
    switch(type){
        // on _PENDING perhaps add loading animation
        case GET_CHARACTERS + '_PENDING':
            return {...state, loading:true};
        case GET_CHARACTERS + '_FULFILLED':
            return {...state, characters: payload, loading:false};
        case GET_CHARACTERS + 'REJECTED':
            return {...state, errorMessage: payload, loading:false};
        default:
            return state;
    }
}
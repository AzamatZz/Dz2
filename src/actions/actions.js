import axios from 'axios';

export const fetchHomes = () => async (dispatch) => {
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        dispatch({
            type: 'SET_HOMES',
            payload: response.data.message,
        });
    } catch (error) {
        console.error('Error fetching homes:', error);
    }
};

export const fetchCats = () => async (dispatch) => {
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search');
        dispatch({
            type: 'SET_CATS',
            payload: response.data.message,
        });
    } catch (error) {
        console.error('Error fetching cats:', error);
    }
};

export const fetchDogs = () => async (dispatch) => {
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        dispatch({
            type: 'SET_DOGS',
            payload: response.data.message,
        });
    } catch (error) {
        console.error('Error fetching dogs:', error);
    }
};

export const fetchWeapons = () => async (dispatch) => {
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        dispatch({
            type: 'SET_WEAPONS',
            payload: response.data.message,
        });
    } catch (error) {
        console.error('Error fetching weapons:', error);
    }
};

export const fetchCities = () => async (dispatch) => {
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        dispatch({
            type: 'SET_CITIES',
            payload: response.data.message,
        });
    } catch (error) {
        console.error('Error fetching cities:', error);
    }
};


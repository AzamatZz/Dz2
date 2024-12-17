// src/redux/actions.js
import axios from 'axios';

// Экшен для получения машин
export const fetchCars = () => async (dispatch) => {
    try {
        const response = await axios.get('https://api.example.com/cars');
        dispatch({
            type: 'SET_CARS',
            payload: response.data
        });
    } catch (error) {
        console.error('Error fetching cars:', error);
    }
};

// Экшен для получения домов
export const fetchHomes = () => async (dispatch) => {
    try {
        const response = await axios.get('https://api.example.com/homes');
        dispatch({
            type: 'SET_HOMES',
            payload: response.data
        });
    } catch (error) {
        console.error('Error fetching homes:', error);
    }
};

// Экшен для получения городов
export const fetchCities = () => async (dispatch) => {
    try {
        const response = await axios.get('https://api.example.com/cities');
        dispatch({
            type: 'SET_CITIES',
            payload: response.data
        });
    } catch (error) {
        console.error('Error fetching cities:', error);
    }
};

// Экшен для получения собак
export const fetchDogs = () => async (dispatch) => {
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        dispatch({
            type: 'SET_DOGS',
            payload: response.data.message
        });
    } catch (error) {
        console.error('Error fetching dogs:', error);
    }
};

// Экшен для получения оружия
export const fetchWeapons = () => async (dispatch) => {
    try {
        const response = await axios.get('https://api.example.com/weapons');
        dispatch({
            type: 'SET_WEAPONS',
            payload: response.data
        });
    } catch (error) {
        console.error('Error fetching weapons:', error);
    }
};


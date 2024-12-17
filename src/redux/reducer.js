const initialState = {
    cats:[],
    homes: [],
    cities: [],
    dogs: [],
    weapons: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CATS':
            return { ...state, cats: action.payload };
        case 'SET_HOMES':
            return { ...state, homes: action.payload };
        case 'SET_CITIES':
            return { ...state, cities: action.payload };
        case 'SET_DOGS':
            return { ...state, dogs: action.payload };
        case 'SET_WEAPONS':
            return { ...state, weapons: action.payload };
        default:
            return state;
    }
};

export default rootReducer;

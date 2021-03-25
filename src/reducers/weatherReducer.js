const initialState = {
    weatherInfo:{}
}

const weatherInfo = (state = initialState, action) => {
    console.log(action,"inside reducer");
    if(action.type === "FETCH_WEATHER"){
        state = {...state, weatherInfo: action.payload.data}
    }
    return state;
}

export default weatherInfo;
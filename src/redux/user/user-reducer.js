const INITIAL_STATE = {
    currentUser: null
}

// if state is ever undefined, it will pass the default value of INITIAL STATE
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;

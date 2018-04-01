
const initialState = {
    checkedItems: ['1', '3', '5']
};

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ITEM': 
            state = Object.assign({}, state, {checkedItems: action.payload.checkedItems});
        break;

        default:
            state = initialState
        break;
    }
    return state;
}

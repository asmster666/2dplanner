
const initialState = {
    territoryLayouts: [],
    itemsOnLayout: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CREATE_LAYOUT':
            return {
                ...state,
                territoryLayouts: (state) => [...state, action.layout]
            };
        case 'ADD_LAYOUT_ITEMS':
            return {
                ...state,
                itemsOnLayout: (state) => [...state, action.items]
            };
        case 'SAVE_LAYOUT':
            return {};
        case 'DELETE_LAYOUT':
            return {};
        case 'SAVE_LAYOUT_ITEMS':
            return {};
        case 'DELETE_LAYOUT_ITEMS':
            return {};
        default:
            return state;
    }
}

export default reducer;
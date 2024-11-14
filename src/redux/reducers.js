const initialState = {
    isOpen: false
};

export const openSidebar = (state = initialState, action = {}) => {
    switch(action.type) {
        case 'TOGGLE_SIDEBAR':
            return { ...state, isOpen: action.state };
        default:
            return state;
    }
}
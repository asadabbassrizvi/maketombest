export const isLoggesUser = (state = false, action) => {
    switch (action.type) {
        case 'IS_LOGGED_USER':
            return !state;
        default:
            return state;
    }

}
/*
	A clean and lean reducer we created for handling forms, to avoid long blocks of useState initializers
 */
const reducerAction = (type, field = '', value = '') => ({ type, field, value });

export const formActions = {
    clear: reducerAction('clear'),
    set: (field, value) => reducerAction('set', field, value)
};

export default initialState => (state, action) => {
    console.log('Form reducer hook called with action: ', action);

    switch (action.type) {
        case 'clear':
            return initialState;
        case 'set':
            return { ...state, [action.field]: action.value };
        default:
            throw new Error();
    }
};

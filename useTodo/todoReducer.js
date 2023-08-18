export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case 'Add':
            return [
                ...initialState,
                action.payload
            ]
        case 'Remove':
            return initialState.filter(todo => todo.id !== action.payload);
        case 'Toggle':
            return initialState.map(el => {
                if (el.id === action.payload) {
                    return {
                        ...el,
                        done: !el.done
                    }
                }
                return el;
            }
            )
        default:
            return initialState;
    }
}
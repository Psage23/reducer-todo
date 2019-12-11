export const initialTodosState = [
    {
        item: 'Shop',
        completed: true,
        id: 1
    }
];

export const todoReducer = (state, action) => {
    switch(action, type) {
        case 'ADD_TODO':
            return [...state]

            default:
                return state;
    }
}
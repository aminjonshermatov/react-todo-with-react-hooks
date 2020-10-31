export default function(state, action) {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.payload,
                    completed: false
                }
            ];
        case 'toggle':
            return state.map(item => {
                if (item.id === action.payload) {
                    item.completed = !item.completed;
                }
                return item;
            });
        case 'remove':
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}

const Reducer = (state =  {
	nextId: 2,
	todoItems: [
	    {id: 0, text: "This is an item", done: false},
	    {id: 1, text: "Another item", done: false}
	]
}, action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return {
				nextId: state.nextId + 1,
				todoItems: [...state.todoItems, {
					id: state.nextId, text: action.text, done: false
				}]
			}
			// IMPLEMENT ME
		case 'REMOVE_TODO':
			return {
				nextId: state.nextId,
				todoItems: state.todoItems.filter(todo => todo.id != action.id)
			}
			// IMPLEMENT ME
		case 'TOGGLE_TODO':
			// IMPLEMENT ME
			return {
				nextId: state.nextId,
				todoItems: state.todoItems.map(todo => {
					if (todo.id !== action.id) {
						return todo;
					}

					else {
						return { ...todo, done: !todo.done}
					}
				})
			}
		default: 
			return state
	}
}

export default Reducer
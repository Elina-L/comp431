
const Reducer = (state = {
	location: "INDEX",
}, action) => {
	switch(action.type) {
		case 'NAVIGATION':
			return { ...state, location: action.location}

		default:
			console.log("location: " + state.location)
			return state
	}
}

export default Reducer
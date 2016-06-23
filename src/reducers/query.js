const initialState = {
	searchFields: [],
	sortFields: [],
	rows: 0,
	url: null
};


export default function(state=initialState, action) {
	switch (action.type) {
		case "SET_QUERY_FIELDS":
			return {...state, searchFields: action.searchFields, sortFields: action.sortFields, url: action.url, rows: action.rows};
		case "SET_SEARCH_FIELDS":
			return {...state, searchFields: action.newFields};
		case "SET_SORT_FIELDS":
			return {...state, sortFields: action.newSortFields};
	}

	return state;
}
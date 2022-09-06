import {
	UPDATE_CATEGORIES,
	UPDATE_PRODUCTS,
	UPDATE_CURRENT_CATEGORY,
} from './actions';

export const reducer = (state, action) => {
	switch (action.type) {
		// if action type is 'UPDATE_PRODUCTS', return a new state object with an updated products array
		case UPDATE_PRODUCTS:
			return {
				...state,
				products: [...action.products],
			};
		// if action type is 'UPDATE_PRODUCTS', return a new state object with an updated categories array
		case UPDATE_CATEGORIES:
			return {
				...state,
				categories: [...action.categories],
			};
		// if the action type is 'UPDATE_CURRENT_CATEGORY, return a new state with an updated current category value
		case UPDATE_CURRENT_CATEGORY:
			return {
				...state,
				currentCategory: action.currentCategory,
			};
		// if the action does not match one of the defined cases
		default:
			return state;
	}
};

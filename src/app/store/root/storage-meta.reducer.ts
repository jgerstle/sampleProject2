import { ActionReducer } from '@ngrx/store';

// idea taken from https://medium.com/better-programming/sync-your-state-in-local-storage-with-ngrx-9d6ceba93fc0
let hasInit = false;
const stateKey = 'state';

export function storageMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
	return (state, action) => {
		const newState = reducer(state, action);
		if (!hasInit) {
			hasInit = true;
			const storedState = localStorage.getItem(stateKey);
			if (storedState) {
				return { ...newState, ...JSON.parse(storedState) };
			} else {
				return newState;
			}
		}
		localStorage.setItem(stateKey, JSON.stringify(newState));
		return newState;
	};
}

import { Action, createReducer, on } from '@ngrx/store';
import { Category } from '@app/models/category.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as categoryActions from '@app/store/category/category.actions';
import v4 from 'uuid';

export const categoryFeatureKey = 'category';

export interface CategoryState extends EntityState<Category> {
	selectedCategoryId: string;
}

const adapter: EntityAdapter<Category> = createEntityAdapter<Category>();

export const initialState: CategoryState = adapter.getInitialState({
	selectedCategoryId: null
});

const categoryReducer = createReducer(
	initialState,
	on(categoryActions.AddCategory, (state, { category }) => adapter.addOne({ ...category, id: v4() }, state)),
	on(categoryActions.SelectCategory, (state, { id }) => ({ ...state, selectedCategoryId: state.selectedCategoryId === id ? null : id })),
	on(categoryActions.DeleteCategory, (state) =>
		adapter.removeOne(state.selectedCategoryId, { ...state, selectedCategoryId: null })),
	on(categoryActions.EditCategory, (state, { category }) =>
		adapter.updateOne({ id: state.selectedCategoryId, changes: category }, state))
);

export function reducer(state: CategoryState | undefined, action: Action) {
	return categoryReducer(state, action);
}

export const { selectAll, selectEntities } = adapter.getSelectors();
export const getSelectedCategoryId = (state: CategoryState) => state.selectedCategoryId;

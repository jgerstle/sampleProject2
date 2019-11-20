import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCategory from './category.reducer';
import { Dictionary } from '@ngrx/entity';
import { Category } from '@app/models/category.model';

export const selectCategoryState = createFeatureSelector<fromCategory.CategoryState>('category');

export const selectAllCategories = createSelector(
	selectCategoryState,
	fromCategory.selectAll
);

export const getSelectedCategoryId = createSelector(
	selectCategoryState,
	fromCategory.getSelectedCategoryId
);

export const selectCategoryEntities = createSelector(
	selectCategoryState,
	fromCategory.selectEntities
);


export const getSelectedCategory = createSelector(
	getSelectedCategoryId,
	selectCategoryEntities,
	(selectedCategoryId: string, entities: Dictionary<Category>) => entities[selectedCategoryId]
);

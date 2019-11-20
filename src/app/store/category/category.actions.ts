import { createAction, props } from '@ngrx/store';
import { Category } from '@app/models/category.model';

export const AddCategory = createAction(
	'[Categories Page] Add Category',
	props<{ category: Category }>()
);

export const SelectCategory = createAction(
	'[Categories Page] Select Category',
	props<{ id: string }>()
);

export const DeleteCategory = createAction(
	'[Categories Page] Delete Category'
);

export const EditCategory = createAction(
	'[Categories Page] Edit Category',
	props<{ category: Category }>()
);


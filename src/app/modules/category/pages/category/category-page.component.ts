import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Category } from '@app/models/category.model';
import { AddEditCategoryDialogComponent } from '../../components/add-edit-category-dialog/add-edit-category-dialog.component';
import { MlState } from '@app/store';
import { select, Store } from '@ngrx/store';
import { AddCategory, DeleteCategory, EditCategory, SelectCategory } from '@app/store/category/category.actions';
import { Observable } from 'rxjs';
import { getSelectedCategory, getSelectedCategoryId, selectAllCategories } from '@app/store/category/category.selectors';
import { first, tap } from 'rxjs/operators';

@Component({
	selector: 'ml-category-page',
	templateUrl: './category-page.component.html',
	styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent {
	categories$: Observable<Category[]>;
	selectedCategoryId$: Observable<string>;

	constructor(private dialog: MatDialog, private store: Store<MlState>) {
		this.categories$ = this.store.pipe(select(selectAllCategories));
		this.selectedCategoryId$ = this.store.pipe(select(getSelectedCategoryId), tap(console.log));
		this.selectedCategoryId$.subscribe(c => console.log(c));
	}

	addCategory() {
		this.addEditCategory();
	}

	selectCategory(category: Category) {
		this.store.dispatch(SelectCategory({ id: category.id }));
	}

	deleteCategory() {
		this.store.dispatch(DeleteCategory());
	}

	addEditCategory(category?: Category) {
		const dialogRef = this.dialog.open(AddEditCategoryDialogComponent, {
			width: '250px',
			data: category || null
		});
		dialogRef.afterClosed().subscribe((updatedCategory: Category) => {
			if (!updatedCategory) {
				return;
			}
			if (category) {
				this.store.dispatch(EditCategory({ category: { ...category, ...updatedCategory } }));
			} else {
				this.store.dispatch(AddCategory({ category: updatedCategory }));
			}
		});
	}

	editCategory() {
		this.store.pipe(select(getSelectedCategory), first()).subscribe(category => {
			this.addEditCategory(category);
		});
	}
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageComponent } from './pages/category/category-page.component';
import { CategoryRoutingModule } from '@app/modules/category/category-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { MatButtonModule, MatCardModule, MatDialogModule, MatInputModule } from '@angular/material';
import { AddEditCategoryDialogComponent } from './components/add-edit-category-dialog/add-edit-category-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryComponent } from './components/category/category.component';

@NgModule({
	declarations: [CategoryPageComponent, AddEditCategoryDialogComponent, CategoryListComponent, CategoryComponent],
	imports: [
		CommonModule,
		CategoryRoutingModule,
		SharedModule,
		MatDialogModule,
		MatButtonModule,
		MatInputModule,
		MatCardModule,
		ReactiveFormsModule,
	],
	entryComponents: [
		AddEditCategoryDialogComponent
	]
})
export class CategoryModule {}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '@app/models/category.model';

@Component({
	selector: 'ml-add-edit-category-dialog',
	templateUrl: './add-edit-category-dialog.component.html',
	styleUrls: ['./add-edit-category-dialog.component.scss']
})
export class AddEditCategoryDialogComponent {
	categoryForm: FormGroup;
	isEdit: boolean;

	constructor(private dialogRef: MatDialogRef<AddEditCategoryDialogComponent>, fb: FormBuilder,
				@Inject(MAT_DIALOG_DATA) data: Category) {
		this.createForm(fb);
		this.isEdit = !!data;
		if (this.isEdit) {
			this.fillForm(data);
		}
	}

	createForm(fb: FormBuilder) {
		this.categoryForm = fb.group({
			name: ['', Validators.required]
		});
	}

	fillForm(category: Category) {
		this.categoryForm.patchValue({
			name: category.name
		});
	}

	close() {
		this.dialogRef.close();
	}

	onSubmit() {
		this.dialogRef.close(this.categoryForm.value);
	}
}

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '@app/models/category.model';

@Component({
	selector: 'ml-category-list',
	templateUrl: './category-list.component.html',
	styleUrls: ['./category-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryListComponent {
	@Input() categories: Category[];
	@Input() selectedCategoryId: string;
	@Output() selectCategory = new EventEmitter<Category>();
	constructor() { }
}

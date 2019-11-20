import { Component, Input } from '@angular/core';
import { Category } from '@app/models/category.model';

@Component({
	selector: 'ml-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
	@Input() category: Category;
	@Input() selected: boolean;

	constructor() { }
}

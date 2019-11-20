import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CategoryPageComponent } from '@app/modules/category/pages/category/category-page.component';

const routes: Route[] = [
	{ path: 'categories', component: CategoryPageComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CategoryRoutingModule {}

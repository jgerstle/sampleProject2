import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const appRoutes: Route[] = [
	{ path: '', redirectTo: '/categories', pathMatch: 'full' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: true } // <-- debugging purposes only
		)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { FullnamePipe } from './fullname/fullname';
import { AgePipe } from './age/age';
@NgModule({
	declarations: [FullnamePipe,
    AgePipe],
	imports: [],
	exports: [FullnamePipe,
    AgePipe]
})
export class PipesModule {}

import { NgModule } from '@angular/core';
import { FullnamePipe } from './fullname/fullname';
import { AgePipe } from './age/age';
import { FilterPipe } from './filter/filter';
@NgModule({
	declarations: [FullnamePipe,
    AgePipe,
    FilterPipe],
	imports: [],
	exports: [FullnamePipe,
    AgePipe,
    FilterPipe]
})
export class PipesModule {}

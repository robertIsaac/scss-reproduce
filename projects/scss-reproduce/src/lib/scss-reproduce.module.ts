import { NgModule } from '@angular/core';
import { ScssReproduceComponent } from './scss-reproduce.component';
import { ReproduceImportComponent } from './reproduce-import/reproduce-import.component';



@NgModule({
  declarations: [ScssReproduceComponent, ReproduceImportComponent],
  imports: [
  ],
  exports: [ScssReproduceComponent]
})
export class ScssReproduceModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleComponent } from './simple.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [SimpleComponent],
  imports: [CommonModule, NgxExtendedPdfViewerModule, SharedModule]
})
export class SimpleModule {}
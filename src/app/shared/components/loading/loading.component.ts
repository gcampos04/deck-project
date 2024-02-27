import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent {
  active: boolean = true;

  constructor(public _loadingService: LoadingService) {
    this._loadingService.loading$.subscribe((res) => {
      this.active = res;
    });
  }
}

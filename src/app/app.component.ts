import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { DeckService } from './shared/services/deck.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'deck';

  constructor(private deckServices: DeckService) {}

  ngOnInit() {
    this.deckServices.getNewDeck(1);
  }
}

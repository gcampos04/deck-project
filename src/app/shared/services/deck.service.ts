import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ErrorMsgEnum } from '../enum/error-msg';
import { LoadingService } from '../components/loading/services/loading.service';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  private apiUrl: string = 'https://deckofcardsapi.com/api/deck';
  public haveRequest: boolean = false;

  constructor(
    private http: HttpClient,
    private _loadingService: LoadingService
  ) {}

  getNewDeck(numberOfDecks: number) {
    this._loadingService.show();

    const finalUrl = `${this.apiUrl}/new/shuffle/?deck_count=${numberOfDecks}`;
    const result: any = this.http.get(finalUrl);
    let subject = result
      .pipe(
        tap(() => {
          this.haveRequest = false;
        })
      )
      .subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.error(ErrorMsgEnum.loadingDeck);
        }
      );
    return subject;
  }

  getCardsToGame() {
    const finalUrl = `${this.apiUrl}/new/shuffle/?cards=AS,AD,AC,AH`;
    const result: any = this.http.get(finalUrl);

    let subject = result
      .pipe(
        tap(() => {
          this.haveRequest = false;
        })
      )
      .subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.error(ErrorMsgEnum.loadingSelectCard);
        }
      );

    return subject;
  }
}

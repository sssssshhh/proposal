import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class Store {
  public state$: Observable<string>;
  private _state$: BehaviorSubject<string>;

  constructor(@Inject('PRODUCT_SERVICE') public value: string){
    this._state$ = new BehaviorSubject(value);
    this.state$ = this._state$.asObservable();
  }

  get state(): string {
    return this._state$.getValue();
  }

  set state(value: string) {
    this._state$.next(value);
  }
}
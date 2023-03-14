import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class Store<T> {
  public state$: Observable<T>;
  private _state$: BehaviorSubject<T>;

  constructor(@Inject(null) private initialState: T){
    this._state$ = new BehaviorSubject(initialState);
    this.state$ = this._state$.asObservable();
  }

  get state(): T {
    return this._state$.getValue();
  }

  set state(value: T) {
    this._state$.next(value);
  }
}
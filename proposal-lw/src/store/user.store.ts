import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class UserStore {
  private _name: BehaviorSubject<string> = new BehaviorSubject('none');

  get name(): string {
    return this._name.getValue();
  }

  setName(newName: string) {
    this._name.next(newName);
  }
}
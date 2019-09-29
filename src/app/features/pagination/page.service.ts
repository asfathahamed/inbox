import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

interface PagePosition {
  startPosition: number;
  endPosition: number;
}

@Injectable({
  providedIn: 'root',
})
export class PageService {
  // Observable navItem source
  private _changePageSource = new BehaviorSubject<PagePosition>({startPosition: 1, endPosition: 10});
  // Observable navItem stream
  pageControl = this._changePageSource.asObservable();
  // service command
  changePage(startPosition, endPosition) {
    this._changePageSource.next({
      startPosition: startPosition,
      endPosition: endPosition
    });
  }
}
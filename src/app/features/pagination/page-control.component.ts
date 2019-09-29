import { Component, OnInit, Input } from '@angular/core';
import { PageService } from './page.service';

@Component({
  selector: 'page-control',
  template: `
          <span>{{startPosition}} - {{endPosition}} of {{total}}</span>
          <div class="btn-group ml-2" role="group" aria-label="Second group">
            <button type="button" class="btn btn-outline-dark btn-sm" (click)="onPrev(event)" [disabled]="disablePrev">
              <i-feather name="chevron-left" class="my-icon"></i-feather>
            </button>
            <button type="button" class="btn btn-outline-dark btn-sm" (click)="onNext(event)" [disabled]="disableNext">
              <i-feather name="chevron-right" class="my-icon"></i-feather>
            </button>
          </div>`,
  styles: [`
    .my-icon {
      height: 16px;
      width: 16px;
    }
  `]
})
export class PageControlComponent implements OnInit {
  @Input() total: number;
  @Input() countPerPage: number = 10;
  private _startPosition: number = 1;
  get startPosition(): number {
      return this._startPosition;
  }
  set startPosition(value: number) {
      this._startPosition = value;
  }
  private _endPosition: number = this.countPerPage;
  get endPosition(): number {
      return this._endPosition;
  }
  set endPosition(value: number) {
      this._endPosition = value;
  }
  private disableNext: boolean = true;
  private disablePrev: boolean = true;
  private pageSet = [];
  private currentPage = 1;
  private totalPages = 0;

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.setPages();
    this.setBounds();
  }

  private setPages() {
    this.pageSet = [];
    this.totalPages = 0;
    for (let i = 1; i < this.total; i += this.countPerPage) {
      let last = i + this.countPerPage - 1;
      if (last >= this.total) {
        last = this.total;
      }
      this.pageSet.push([i, last]);
    }
    this.totalPages = this.pageSet.length;
  }

  private setBounds() {
    this.startPosition = this.pageSet[this.currentPage - 1][0];
    this.endPosition = this.pageSet[this.currentPage - 1][1];
    this.disableNext = this.currentPage >= this.totalPages;
    this.disablePrev = this.currentPage <= 1;
    this.pageService.changePage(this.startPosition, this.endPosition);
  }

  private onNext() {
    this.currentPage += 1;
    this.setBounds();
  }

  private onPrev() {
    this.currentPage -= 1;
    this.setBounds();
  }
}

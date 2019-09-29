import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pagination',
  template: `
          <span>{{startPosition}} - {{endPosition}} of {{total}}</span>
          <div class="btn-group mr-2" role="group" aria-label="Second group">
            <button type="button" class="btn btn-outline-dark btn-sm" (click)="onPrev(event)" [disabled]="disablePrev">
              <i-feather name="chevron-left" class="feather"></i-feather>
            </button>
            <button type="button" class="btn btn-outline-dark btn-sm" (click)="onNext(event)" [disabled]="disableNext">
              <i-feather name="chevron-right" class="feather"></i-feather>
            </button>
          </div>`,
})
export class PaginationComponent implements OnInit {
  @Input() total: number;
  @Input() countPerPage: number = 10;
  private _startPosition: number = 1;
  get startPosition(): number {
      return this._startPosition;
  }
  set startPosition(value: number) {
      this._startPosition = value;
      this.setBounds();
  }
  private _endPosition: number = this.countPerPage;
  get endPosition(): number {
      return this._endPosition;
  }
  set endPosition(value: number) {
      this._endPosition = value;
      this.setBounds();
  }
  private disableNext: boolean = true;
  private disablePrev: boolean = true;

  constructor() { }

  ngOnInit() {
    this.setBounds();
  }

  private setBounds() {
    // set end position
    if (this.countPerPage >= this.total) {
      this.endPosition = this.total;
    } else {
      this.disableNext = false;
    }
    if (this.startPosition <= 1) {
      this.startPosition = 1;
      this.disablePrev = true;
    }
    if (this.endPosition >= this.total) {
      this.endPosition = this.total;
      this.disableNext = true;
    }
    if (this.startPosition > 1) {
      this.disablePrev = false;
    }
  }

  private onNext() {
    this.startPosition = this.endPosition + 1;
    this.endPosition = this.endPosition + this.countPerPage;
    this.setBounds();
  }

  private onPrev() {
    if (this.endPosition >= this.total) {
      if(this.total % this.countPerPage > 0) {
        this.endPosition = this.total - this.countPerPage;
        this.startPosition = this.endPosition - this.countPerPage + 1;
      }
    }
    this.startPosition = this.startPosition - this.countPerPage;
    this.endPosition = this.startPosition + this.countPerPage;
    this.setBounds();
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-trial-two',
  imports: [],
  templateUrl: './trial-two.component.html',
  styleUrl: './trial-two.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrialTwoComponent {
  protected items = [0, 0];

  protected onChange(index: number, value: number): void {
    this.items[index] = value;
    this.items = [...this.items]
    console.info(this.items);
  }

  protected add(): void {
    this.items.push(0);
    console.info(this.items);
    }

  protected remove(index: number): void {
    this.items.splice(index, 1);
    console.info(this.items);
    }

  protected changeColor(elem: HTMLElement): void {
    if(elem.style.backgroundColor === '')
    {
      elem.style.backgroundColor = 'yellow';
    }
    else
    {
      elem.style.backgroundColor = '';
    }
  }
}

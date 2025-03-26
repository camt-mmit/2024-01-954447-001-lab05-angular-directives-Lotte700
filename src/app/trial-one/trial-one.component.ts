import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-trial-one',
  imports: [],
  templateUrl: './trial-one.component.html',
  styleUrl: './trial-one.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrialOneComponent {
  protected items = [0, 0];

  protected onChange(index: number, value: number): void {
    this.items[index] = value;
    this.items = [...this.items]
    console.info(this.items);
  }
}

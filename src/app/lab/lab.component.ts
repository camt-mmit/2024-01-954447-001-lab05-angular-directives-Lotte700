import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lab',
  imports: [CommonModule],
  templateUrl: './lab.component.html',
  styleUrl: './lab.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LabComponent {
  sections: { inputs: number[] }[] = [{ inputs: [0] }];

  // Add a new section
  addSection(): void {
    this.sections.push({ inputs: [0] });
  }

  // Remove a section
  removeSection(index: number): void {
    if (this.sections.length > 1) {
      this.sections.splice(index, 1);
    }
  }

  // Add an input to a section
  addInput(sectionIndex: number): void {
    this.sections[sectionIndex].inputs.push(0);
  }

  // Remove an input from a section
  removeInput(sectionIndex: number, inputIndex: number): void {
    if (this.sections[sectionIndex].inputs.length > 1) {
      this.sections[sectionIndex].inputs.splice(inputIndex, 1);
    }
  }

  // Update the value of an input
  updateInputValue(sectionIndex: number, inputIndex: number, event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.sections = this.sections.map((section, secIdx) =>
      secIdx === sectionIndex
        ? {
            ...section,
            inputs: section.inputs.map((val, idx) =>
              idx === inputIndex ? inputElement.valueAsNumber || 0 : val
            ),
          }
        : section
    );
      }

  // Calculate the total sum for a section
  getSectionTotal(sectionIndex: number): number {
    return this.sections[sectionIndex].inputs.reduce((sum, num) => sum + num, 0);
  }
}


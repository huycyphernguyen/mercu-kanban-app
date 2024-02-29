import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Candidate, Stages } from '../interfaces/candidate.interface';
import { ALWAYS_FALSE_HANDLER } from '@taiga-ui/cdk';

@Component({
  selector: 'kanban-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'web';

  STAGES = [Stages.Applied, Stages.Interviewing, Stages.Offered, Stages.Hired];

  // c1 = {
  //   firstName: 'Huy',
  //   lastName: 'Nguyen',
  //   email: 'test@email.com',
  //   phoneNumber: '123123',
  //   stage: Stages.Applied,
  // } as Candidate;

  // c2 = {
  //   firstName: 'Huy Cypher',
  //   lastName: 'Nguyen',
  //   email: 'test@email.com',
  //   phoneNumber: '123123',
  //   stage: Stages.Interviewing,
  // } as Candidate;

  // renderStagesRow = (c1: Candidate): string[] => {
  //   return this.STAGES.map((s) =>
  //     s === c1.stage ? `${c1.firstName} ${c1.lastName}` : ''
  //   );
  // };

  // items2: readonly string[] = this.renderStagesRow(this.c1);

  // items = this.STAGES;

  // value = this.items.map(ALWAYS_FALSE_HANDLER) as boolean[];

  // onModelChange(index: number): void {
  //   this.value[index] = !this.value[index];
  // }

  // enabled = this.items;

  cardHeight = 6;

  items = [
    {
      w: 1,
      h: this.cardHeight,
      content: Stages.Applied,
      classes: 'applied-card',
    },
    {
      w: 1,
      h: this.cardHeight,
      content: Stages.Interviewing,
      classes: 'interviewing-card',
    },
    {
      w: 1,
      h: this.cardHeight,
      content: Stages.Offered,
      classes: 'offered-card',
    },
    { w: 1, h: this.cardHeight, content: Stages.Hired, classes: 'hired-card' },
  ];

  order = new Map();
}

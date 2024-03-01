import {
  Component,
  ChangeDetectionStrategy,
  Injectable,
  Inject,
} from '@angular/core';
import { Candidate, Stages } from '../interfaces/candidate.interface';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiDialogService } from '@taiga-ui/core';

@Component({
  selector: 'kanban-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@Injectable()
export class AppComponent {
  title = 'web';

  STAGES = [Stages.Applied, Stages.Interviewing, Stages.Offered, Stages.Hired];

  cardHeight = 6;
  order = new Map();
  users = {};
  baseUrl = 'https://localhost:7056';
  headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
  };

  exampleForm = new FormGroup({
    nameValue: new FormControl(''),
  });

  open = false;

  showDialog(): void {
    this.open = true;
  }

  constructor(
    private http: HttpClient,
    @Inject(TuiDialogService)
    private readonly dialogs: TuiDialogService
  ) {}

  ngOnInit() {
    this.http
      .get(`${this.baseUrl}/Users`, {
        headers: this.headers,
      })
      .subscribe(
        (val) =>
          (this.items.candidateItems = (val as Candidate[]).map((c) => {
            return {
              w: 1,
              h: 1,
              candidate: c,
              order: new Map(),
            };
          }))
      );
  }

  items = {
    headerItems: [
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
      {
        w: 1,
        h: this.cardHeight,
        content: Stages.Hired,
        classes: 'hired-card',
      },
    ],
    candidateItems: [
      {
        w: 1,
        h: 1,
        candidate: {
          email: '',
          firstName: '',
          lastName: '',
          phoneNumber: '',
          stage: undefined,
        } as Candidate,
        order: new Map(),
      },
    ],
  };

  onMouseUp(index: number) {
    this.updateStageForCandidate(index);
    console.log(this.items.candidateItems[index].order);
  }

  updateStageForCandidate(index: number) {
    const { candidate, order } = this.items.candidateItems[index];

    this.http
      .put(
        `${this.baseUrl}/Users/${this.items.candidateItems[index].candidate.id}`,
        {
          ...candidate,
          stage:
            this.STAGES[
              order.get(this.STAGES.findIndex((s) => s === candidate.stage))
            ],
        },
        {
          headers: this.headers,
        }
      )
      .subscribe((val) => console.log(val));
  }

  onAddCandidateClick(index: number) {
    this.open = true;
    this.dialogs.subscribe({
      complete: () => {
        console.log(index);
      },
    });
  }
}

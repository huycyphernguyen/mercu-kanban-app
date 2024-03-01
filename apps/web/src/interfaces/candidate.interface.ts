export interface Candidate {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  stage?: Stages;
}

export enum Stages {
  Applied = 'Applied',
  Interviewing = 'Interviewing',
  Offered = 'Offered',
  Hired = 'Hired',
}

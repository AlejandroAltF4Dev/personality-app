export interface ISurvey {
  survey?: Survey;
}

export interface Survey {
  title?: string;
  questions?: Question[];
}

export interface Question {
  number?: number;
  question?: string;
  options?: Option[];
}

export interface Option {
  value?: number;
  answer?: string;
}

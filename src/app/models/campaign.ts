import { Timestamp } from "firebase/firestore";

export type Campaign = {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  nextActivation: string;
  schedule: Schedule[];
  modifiedDate: number;
};

export type Schedule = {
  days: string[];
  startTime: string;
  endTime: string;
};

import { BehaviorSubject } from "rxjs";

const rescueSubject = new BehaviorSubject({});

export const RescueObservable = Object.freeze({
  setRescue: (rescue: any) => {
    rescueSubject.next(rescue);
  },
  rescue$: rescueSubject.asObservable(),
});

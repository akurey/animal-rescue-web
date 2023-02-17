import { BehaviorSubject } from "rxjs";

const rescueSubject = new BehaviorSubject({});

// eslint-disable-next-line import/prefer-default-export
export const RescueObservable = Object.freeze({
  setRescue: (rescue: any) => {
    rescueSubject.next(rescue);
  },
  rescue$: rescueSubject.asObservable(),
});

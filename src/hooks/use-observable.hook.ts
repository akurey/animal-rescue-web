import { useEffect, useState } from "react";

/* eslint-disable import/prefer-default-export */
export const useObservable = (observable: any) => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const subscription = observable.subscribe((dataSubscribe: any) =>
      setData(dataSubscribe)
    );
    return () => subscription?.unsubscribe?.();
  }, []);

  return [data];
};

import React, { useEffect } from "react";
import { UserObservable } from "../../../observables/user.observable";
import { useObservable } from "../../../hooks/use-observable.hook";
import "./home.scss";

function Home() {
  const [user] = useObservable(UserObservable.user$);

  useEffect(() => {
    console.log(user);
  }, []);

  return <p>Home</p>;
}

export default Home;

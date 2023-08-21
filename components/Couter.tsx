import { useState } from "react";
import styles from "./Counter.module.scss";

interface CouterProps {

}

export function Counter(props: CouterProps) {
  let [ counter, setCounter ] = useState(0);
  return <div className={ styles.div }>
    { counter }
    <button
      className={ styles.button }
      onClick={ () => setCounter(counter => counter + 1) }
    >Increment
    </button>
  </div>;
}
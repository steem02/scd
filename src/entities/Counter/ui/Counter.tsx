import { Button } from '@/shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {}

export function Counter(props: CounterProps) {
  const value = useSelector(getCounterValue);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <div data-testid={'counter-value'}>{value}</div>
      <Button onClick={decrement} data-testid={'decrement-btn'}>
        decrement
      </Button>
      <Button onClick={increment} data-testid={'increment-btn'}>
        increment
      </Button>
    </div>
  );
}

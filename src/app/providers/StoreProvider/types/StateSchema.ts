import { type CounterSchema } from '@/entities/Counter/model/types/counter';
import { type UserSchema } from '@/entities/User';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
}

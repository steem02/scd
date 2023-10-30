import { type CounterSchema } from '@/entities/Counter/model/types/CounterSchema';
import { type UserSchema } from '@/entities/User';
import { type LoginSchema } from '@/features/auth-by-username';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  loginForm: LoginSchema;
}

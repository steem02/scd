import { type CounterSchema } from '@/entities/Counter/model/types/CounterSchema';
import { type UserSchema } from '@/entities/User';
import { type LoginSchema } from '@/features/auth-by-username';
import { type ProfileSchema } from '@/entities/Profile/module/types/ProfileSchema';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // async states
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
}

import { type CounterSchema } from '@/entities/Counter/model/types/CounterSchema';
import { type UserSchema } from '@/entities/User';
import { type LoginSchema } from '@/features/auth-by-username';
import { type ProfileSchema } from '@/entities/Profile';
import type { AxiosInstance } from 'axios';
import type { To } from '@remix-run/router';
import type { NavigateOptions } from 'react-router';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // async states
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
}

export interface ThunkExtraArgs {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T = string> {
  rejectValue: T extends infer D ? D : string;
  extra: ThunkExtraArgs;
}

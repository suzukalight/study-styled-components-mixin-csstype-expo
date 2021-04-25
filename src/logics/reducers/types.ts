export interface SerializedError {
  name?: string;
  message?: string;
  code?: string;
  stack?: string;
}

export interface PendingAction<ThunkArg> {
  type: string;
  payload: undefined;
  meta: {
    requestId: string;
    arg: ThunkArg;
  };
}

export interface FulfilledAction<ThunkArg, PromiseResult> {
  type: string;
  payload: PromiseResult;
  meta: {
    requestId: string;
    arg: ThunkArg;
  };
}

export interface RejectedAction<ThunkArg> {
  type: string;
  payload: any;
  error: SerializedError | any;
  meta: {
    requestId: string;
    arg: ThunkArg;
    aborted: boolean;
    condition: boolean;
  };
}

export interface RejectedWithValueAction<ThunkArg, RejectedValue> {
  type: string;
  payload: RejectedValue | any;
  error: { message: 'Rejected' } | any;
  meta: {
    requestId: string;
    arg: ThunkArg;
    aborted: boolean;
  };
}

export type Pending = <ThunkArg>(requestId: string, arg: ThunkArg) => PendingAction<ThunkArg>;

export type Fulfilled = <ThunkArg, PromiseResult>(
  payload: PromiseResult,
  requestId: string,
  arg: ThunkArg,
) => FulfilledAction<ThunkArg, PromiseResult>;

export type Rejected = <ThunkArg>(requestId: string, arg: ThunkArg) => RejectedAction<ThunkArg>;

export type RejectedWithValue = <ThunkArg, RejectedValue>(
  requestId: string,
  arg: ThunkArg,
) => RejectedWithValueAction<ThunkArg, RejectedValue>;

export type AsyncThunkConfig<T = unknown> = {
  rejectValue: T;
};

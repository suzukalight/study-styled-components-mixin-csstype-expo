import reducer from './slice';
import { AuthState } from '../../store/schema';
import { signIn } from './actions/signIn';

describe('reducers/auth/slice', () => {
  it('OK: サインイン処理中フラグをセットできた', async () => {
    const state = { actor: null, signingIn: false } as AuthState;
    const action = signIn.pending('', { email: '', password: '' });
    const expected = { signingIn: true } as Partial<AuthState>;
    expect(reducer(state, action)).toMatchObject(expected);
  });

  it('OK: サインインしたユーザ情報をセットできた', async () => {
    const state = { actor: null, signingIn: false } as AuthState;
    const action = signIn.fulfilled({ id: '42' }, '', { email: '', password: '' });
    const expected = { actor: { id: '42' } } as Partial<AuthState>;
    expect(reducer(state, action)).toMatchObject(expected);
  });

  it('OK: サインインに失敗したためユーザ情報をリセットできた', async () => {
    const state = { actor: { id: '1' }, signingIn: false } as AuthState;
    const action = signIn.rejected(new Error('error'), '', { email: '', password: '' });
    const expected = { actor: null } as Partial<AuthState>;
    expect(reducer(state, action)).toMatchObject(expected);
  });
});

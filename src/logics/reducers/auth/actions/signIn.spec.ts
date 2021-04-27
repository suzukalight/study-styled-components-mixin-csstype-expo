import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { signIn } from './signIn';
import { AuthState } from '../../../store/schema';

const mockStore = createMockStore<AuthState, any>([thunk]);

describe('reducers/auth/actions/signIn', () => {
  it('OK: 正しいemail/passwordでサインインできた', async () => {
    const expected = [{ type: signIn.pending.toString() }, { type: signIn.fulfilled.toString() }];
    const store = mockStore({ actor: null, signingIn: false });

    await store.dispatch(signIn({ email: 'a@email.com', password: '1234' }));
    expect(store.getActions()).toMatchObject(expected);
  });

  it('NG: 誤ったemail/passwordなのでサインインに失敗した', async () => {
    const expected = [{ type: signIn.pending.toString() }, { type: signIn.rejected.toString() }];
    const store = mockStore({ actor: null, signingIn: false });

    await store.dispatch(signIn({ email: 'invalid', password: '1234' }));
    expect(store.getActions()).toMatchObject(expected);
  });
});

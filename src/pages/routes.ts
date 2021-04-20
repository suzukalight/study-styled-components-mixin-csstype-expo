import { MainTabParamList } from './Main/routes';
import { AuthStackParamList } from './Auth/routes';

export type RootStackParamList = {
  Main: { screen: keyof MainTabParamList };
  Auth: { screen: keyof AuthStackParamList };
};

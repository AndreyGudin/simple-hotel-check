// import { LoginPage } from '../pages/LoginPage';
import { MainPage } from '../pages/MainPage';
import { StoreProvider } from './providers/StoreProvider';

export default function App(): JSX.Element {
  return (
    <StoreProvider>
      <MainPage />
    </StoreProvider>
  );
}

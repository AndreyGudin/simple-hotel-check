import { Suspense } from 'react';
import { AppRouter } from './providers/router/ui/AppRouter';

export default function App(): JSX.Element {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppRouter />{' '}
    </Suspense>
  );
}

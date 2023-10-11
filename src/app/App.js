import withAppProviders from './withAppProviders';
import BrowserRouter from './router/core/BrowserRouter';
import Layout from '../app/components/Layout';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
    </>
  );
}

export default withAppProviders(App)();
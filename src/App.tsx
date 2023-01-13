import { useKeycloak } from '@react-keycloak/web';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

const App = () => {

  const { keycloak } = useKeycloak();

  console.log("Logged in ", keycloak.authenticated);

  return (
    <Routes>
      <Route path="/*" element={
        (keycloak.authenticated ? <Navigation /> : <Home />
        )} />
    </Routes>
  );
}

export default App;

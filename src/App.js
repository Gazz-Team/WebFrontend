import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Navbar from './components/TemplateComponents/Navbar/Navbar'
import {AllOpenRoutes, AllPrivateRoutes} from './routes/routes';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute'


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
            {AllOpenRoutes.map(({path, component: Component})=>(
                <Route
                exact
                key={path}
                path={path}
                render={() => <Component />}
              />
              ))}
            {AllPrivateRoutes.map(({path, component: Component})=>(
              <PrivateRoute
              exact
              key={path}
              path={path}
              component={()=><Component/>}
            />
            ))}
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

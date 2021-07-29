import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Navbar from './components/TemplateComponents/Navbar/Navbar'
import {AllOpenRoutes} from './routes/routes';
import { AuthProvider } from './Auth';


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
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

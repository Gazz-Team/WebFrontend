import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Navbar from './components/TemplateComponents/Navbar/Navbar'
import {AllOpenRoutes} from './routes/routes';



function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;

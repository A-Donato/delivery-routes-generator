import './App.css';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import SeacrhPage from './pages/search-page';

function App() {
  return (
    <Router>
      <div className='h-full w-full' >
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <SeacrhPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;

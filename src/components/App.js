import '../scss/App.scss'
import Header from './Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './Navigation'
import Projects from './Projects'
import About from './About'
import ErrorPage from './ErrorPage';

function App() {
  return (
    <div className='container'>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/'>
            <Header />
          </Route>

          <Route path='/projects'>
            <Projects />
          </Route>

          <Route path='/about'>
            <About />
          </Route>

          <Route path='*'>
            <ErrorPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;

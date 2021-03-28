import '../scss/App.scss'
import Header from './Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './Navigation'
import Projects from './Projects'
import About from './About'

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
          </Switch>
      </Router>
    </div>
  )
}

export default App;

import '../scss/App.scss'
import Header from './Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './Navigation'
import { lazy, Suspense } from 'react'
const Projects = lazy(() => import('./Projects'))
const About = lazy(() => import('./About'))
const Skills = lazy(() => import('./Skills'))

function App() {
  return (
    <div className='container'>
      <Router>
        <Navigation />
        <Suspense fallback={<Loading />}>
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

            <Route path='/skills'>
              <Skills />
            </Route>

            <Route>
              <ErrorPage />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  )
}

function Loading() {
  return (
    <div className='loading'>
      <span>Loading...</span>
    </div>
  )
}

function ErrorPage() {
  return (
    <div className='error'>
      <h1>Page not found!</h1>
    </div>
  )
}

export default App;

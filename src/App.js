import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavTop from './components/Nav'
import home from './pages/home'
import Thank from './components/Thank'
import Error from './components/Error'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <Router>
        <NavTop />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={home} />
          <Route path="/thankyou" component={Thank} />
          <Route component={Error} />
        </Switch>
      </Router>
    </>
  )
}

export default App

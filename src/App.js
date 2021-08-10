import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavTop from './components/Nav'
import home from './pages/home'

function App() {
  return (
    <>
      <Router>
        <NavTop />
        <Switch>
          <Route path="/" component={home} />
        </Switch>
      </Router>
    </>
  )
}

export default App

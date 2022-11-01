import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Survey from "./pages/Survey";
import Results from './pages/Results';
import Freelances from './pages/Freelances';
import Profile from './pages/Profile';
import Header from './components/Header';
import Error from './components/Error'
/*
import Footer from './components/Footer'
import GlobalStyle from './utils/style/GlobalStyle'
import { ThemeProvider, SurveyProvider } from './utils/context'
*/
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/" element={<Error />} />
      </Routes >    
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

/*
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/survey/:questionNumber">
              <Survey />
            </Route>
            <Route path="/results">
              <Results />
            </Route>
            <Route path="/freelances">
              <Freelances />
            </Route>
            <Route
              path="/profile/:id"
              render={(props) => <Profile {...props} />}
            />
            <Route path="*">
              <Error />
            </Route>
          </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)


*/
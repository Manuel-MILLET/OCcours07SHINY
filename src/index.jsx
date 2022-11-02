import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Survey from "./pages/Survey";
import Results from './pages/Results';
import Freelances from './pages/Freelances';
import Header from './components/Header';
import Error from './components/Error';
import { createGlobalStyle } from 'styled-components';

/*
import GlobalStyle from './utils/style/GlobalStyle'
import Footer from './components/Footer'
import { ThemeProvider, SurveyProvider } from './utils/context'
*/

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    body {
      margin: 0;
    }
`

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/survey/:questionNumber" element={<Survey />} />
          <Route path="/results" element={<Results />} />
          <Route path="/freelances" element={<Freelances />} />
          <Route path="/" element={<Error />} />
        </Routes >    
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

/*
const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    body {
      margin: 0;
    }
`
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
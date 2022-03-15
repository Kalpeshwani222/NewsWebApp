import React from "react";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import Navbar from "./component/Navbar";
import News from "./screens/News";
import Raw from "./component/Raw";
import Loading from "./component/Loading";
import MySavedNews from "./screens/MySavedNews";

//ed0c66bbdea640629dab0d6a82cd9ab8
const App = () => {
  const pageSize = 5;
  // const apiKey = "541f79b15e9343bc954d0e2a4bfd2f73";
  const apiKey =  "ed0c66bbdea640629dab0d6a82cd9ab8";

  return (
    <>

    <Raw />
      {/* <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <News
              key="general"
              pageSize={pageSize}
              apiKey={apiKey}
              country="in"
              category="general"
            />
          </Route>

          <Route exact path="/business">
            <News
              key="business"
              pageSize={pageSize}
              apiKey={apiKey}
              country="in"
              category="business"
            />
          </Route>

          <Route exact path="/entertainment">
            <News
              key="entertainment"
              pageSize={pageSize}
              apiKey={apiKey}
              country="in"
              category="entertainment"
            />
          </Route>

          <Route exact path="/health">
            <News
              key="health"
              pageSize={pageSize}
              apiKey={apiKey}
              country="in"
              category="health"
            />
          </Route>

          <Route exact path="/science">
            <News
              key="science"
              pageSize={pageSize}
              apiKey={apiKey}
              country="in"
              category="science"
            />
          </Route>

          <Route exact path="/sport">
            <News
              key="sport"
              pageSize={pageSize}
              apiKey={apiKey}
              country="in"
              category="sport"
            />
          </Route>

          <Route exact path="/technology">
            <News
              key="technology"
              pageSize={pageSize}
              apiKey={apiKey}
              country="in"
              category="technology"
            />
          </Route>

          <Route path = "/savednews" component={MySavedNews} exact />

          <Route path="/login" component={LoginScreen} exact />
          <Route path="/register" component={RegisterScreen} exact />

          <Route path="/loading" component={Loading} exact />
        </Switch>
      </BrowserRouter>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginScreen} exact />
          <Route path="/register" component={RegisterScreen} exact />
          <Route path="/home" component={Home} exact />
        </Switch>
      </BrowserRouter> */}
    </>
  );
};

export default App;

import React from "react";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import News from "./screens/News";
import MySavedNews from "./screens/MySavedNews";
import ResetPassword from "./screens/ResetPassword";
import NewsChannelList from "./screens/NewsChannelList";
import Channels from "./screens/Channels";
import Raw from "./component/Raw"
import NewsDeatailsPage from "./screens/NewsDetailsPage"

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY_2;

  return (

  
    <>
      <BrowserRouter>
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

          <Route path="/details" component={NewsDeatailsPage} exact />

          {/* routes for channels of the news */}
          <Route path="/channels" component={Channels} exact />

          <Route path="/ndtv">
            <NewsChannelList
              domains="ndtv.com"
              pageSize={pageSize}
              apiKey={apiKey}
            />
          </Route>

          <Route path="/hindustantimes">
            <NewsChannelList
              domains="hindustantimes.com"
              pageSize={pageSize}
              apiKey={apiKey}
            />
          </Route>

          <Route path="/indianexpress">
            <NewsChannelList
              domains="indianexpress.com"
              pageSize={pageSize}
              apiKey={apiKey}
            />
          </Route>

          <Route path="/news18">
            <NewsChannelList
              domains="news18.com"
              pageSize={pageSize}
              apiKey={apiKey}
            />
          </Route>
          <Route path="/digitaltrends">
            <NewsChannelList
              domains="digitaltrends.com"
              pageSize={pageSize}
              apiKey={apiKey}
            />
          </Route>

          <Route path="/india">
            <NewsChannelList
              domains="zeenews.india.com"
              pageSize={pageSize}
              apiKey={apiKey}
            />
          </Route>

          {/* end */}

          <Route path="/savednews" component={MySavedNews} exact />

          <Route path="/login" component={LoginScreen} exact />
          <Route path="/register" component={RegisterScreen} exact />

          <Route path="/reset-password" component={ResetPassword} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

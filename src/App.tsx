import './App.css';

import  {Route, RouteComponentProps, BrowserRouter as Router, Switch} from 'react-router-dom';

import Navibar from './Components/UI/Navibar';
import React from 'react';
import routes from './Config/routes';

const App: React.FC<{}> = props =>  {

  return (
    <div className="App">
        <Router>
          <Navibar /> 
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps<any>) => (
                    <route.component
                        name={route.name} 
                        {...props}
                        {...route.props}
                    />
                  )}
                />
              );
            })}
          </Switch>
        </Router>
    </div>
  );

}

export default App;

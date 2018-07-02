import React from 'react';
import { Nativerouter, Switch, Route } from 'react-router-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';
import { Root } from 'native-base';
import Home from './components/Home';

class App extends React.Component {

  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <NativeRouter>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </NativeRouter>
      </Provider>
    );
  }
}

const AppNav = StackNavigator(
  {
    Settings: { screen: Settings },
  }
);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default () =>
  <Root>
    <App />
  </Root>;


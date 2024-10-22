/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

import * as Sentry from '@sentry/react-native';
import {Config} from './Config';

Sentry.init({
  dsn: Config.sentryDsn,
  debug: true,
  tracesSampleRate: 1.0,

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // enableSpotlight: __DEV__,
});

function App(): React.JSX.Element {
  useEffect(() => {
    // THIS IS THE LINE WHICH PRODUCES THE RANGEERROR:
    fetch('https://jsonplaceholder.typicode.com/todos/1');
  }, []);

  return (
    <SafeAreaView>
      <Text>If you can see this, the app works!</Text>
      <Button title="Crash app" onPress={() => Sentry.nativeCrash()} />
    </SafeAreaView>
  );
}

export default Sentry.wrap(App);

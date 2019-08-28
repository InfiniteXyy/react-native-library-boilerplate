import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button } from 'example-library';

const App = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Button
        content="Simple~"
        onPress={() => {
          console.log('you click me');
        }}
      />
    </SafeAreaView>
  );
};

export default App;

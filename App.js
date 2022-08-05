import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { colors } from './src/utils/colors';

export function App() {
  const [currentSubject, setCurrentSubject] = useState('test');

  function handleOnTime() {}

  function handleClearSubject() {}

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimeEnd={handleOnTime}
          clearSubject={handleClearSubject}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.white,
  },
});

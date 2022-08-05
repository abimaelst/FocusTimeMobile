import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Countdown } from '../components/Countdown';
import { paddingSizes } from '../utils/sizes';

export const Timer = ({ focusSubject }) => {
  function handleProgress() {}

  function handleEnd() {}

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown isPaused onProgress={handleProgress} onEnd={handleEnd} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    padding: paddingSizes.md,
  },
});

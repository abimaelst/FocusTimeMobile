import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { paddingSizes } from '../utils/sizes';

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);

  function handleProgress() {}

  function handleEnd() {}

  function handlePress() {
    setIsStarted(!isStarted);
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={!isStarted}
          onProgress={handleProgress}
          onEnd={handleEnd}
        />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && <RoundedButton title="start" onPress={handlePress} />}
        {isStarted && <RoundedButton title="pause" onPress={handlePress} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    padding: paddingSizes.md,
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: paddingSizes.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

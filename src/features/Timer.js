import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors';
import { paddingSizes, spacing } from '../utils/sizes';

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  function handleProgress(timer) {
    setProgress(timer / 100);
  }

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
        <View style={styles.body}>
          <Text style={styles.title}>Focusing on</Text>
          <Text style={styles.task}>Task one</Text>
        </View>
      </View>
      <View style={styles.progressBar}>
        <ProgressBar
          progress={progress}
          color={colors.secondary}
          style={{ height: spacing.sm }}
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
  body: {
    paddingTop: paddingSizes['md'],
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
  progressBarContainer: {
    paddingTop: paddingSizes.sm,
  },
});

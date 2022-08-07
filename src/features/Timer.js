import React, { useState } from 'react';
import { View, StyleSheet, Text, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors';
import { paddingSizes, spacing } from '../utils/sizes';
import { Timing } from './Timing';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  function handleProgress(timer) {
    setProgress(timer / 100);
  }

  function handleEnd(reset) {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
  }

  function handlePress() {
    setIsStarted(!isStarted);
  }

  const handleChangeMinutes = (min) => () => {
    setProgress(1);
    setIsStarted(false);
    setMinutes(min);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
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
        <Timing onChangeTime={handleChangeMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && <RoundedButton title="start" onPress={handlePress} />}
        {isStarted && <RoundedButton title="pause" onPress={handlePress} />}
      </View>
      <View style={styles.clearSubject}>
        <RoundedButton size={50} title="-" onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.4,
    alignItems: 'center',
    padding: paddingSizes.md,
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.25,
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
  clearSubject: {
    flexDirection: 'row',
    paddingBottom: 25,
    paddingTop: 25,
    justifyContent: 'center',
  },
});

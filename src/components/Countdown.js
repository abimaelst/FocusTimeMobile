import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { fontSizes, paddingSizes } from '../utils/sizes';
import { colors } from '../utils/colors';

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({
  minutes = 0.3,
  isPaused,
  onStart = () => {},
  onPause = () => {},
  onEnd = () => {},
  onProgress = () => {},
}) => {
  const [millis, setMillis] = useState(minutesToMillis(minutes));
  const interval = React.useRef(null);

  const reset = () => {
    setMillis(minutesToMillis(minutes));
  };

  const countDown = () =>
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current);
        onEnd(reset);
        return time;
      }
      const timeLeft = time - 1000;
      onProgress((timeLeft / minutesToMillis(minutes)) * 100);
      return timeLeft;
    });

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    if (isPaused) {
      onPause();
      if (interval.current) clearInterval(interval.current);
      return;
    }
    onStart();
    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes['2xl'],
    fontWeight: 'bold',
    color: '#fff',
    padding: paddingSizes.lg,
    backgroundColor: colors.secondary,
  },
});

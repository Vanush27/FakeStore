import {StyleSheet} from 'react-native';
import {useTheme} from '@rneui/themed';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    call_wrapper: {
      color: theme.colors?.secondary,
      margin: 5,
    },
  });

  return {
    styles,
  };
}

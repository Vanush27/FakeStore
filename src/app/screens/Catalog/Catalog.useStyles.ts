import {StyleSheet} from 'react-native';
import {useTheme} from '@rneui/themed';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    catalog_wrapper: {
      color: theme.colors?.secondary,
    },
  });

  return {
    styles,
  };
}

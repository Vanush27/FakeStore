import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from '@ui-kit';

import {useStyles} from './Catalog.useStyles';

const CallCenter = () => {
  const {styles} = useStyles();

  return (
    <SafeAreaView>
      <Text style={styles.call_wrapper}>{'CallCenter screen'}</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
        consequatur cum eligendi iure sed. Neque,dolorere sint, impedit facere
        eaque saepe voluptas corporis mollitia, quis quisquam quasi
      </Text>
    </SafeAreaView>
  );
};

export default CallCenter;

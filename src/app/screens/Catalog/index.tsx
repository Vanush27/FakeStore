import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from '@ui-kit';

import {useStyles} from './Catalog.useStyles';

const Catalog = () => {
  const {styles} = useStyles();

  return (
    <SafeAreaView>
      <Text style={styles.catalog_wrapper}>{'Catalog screen'}</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
        consequatur cum eligendi iure sed. Neque,dolorere sint, impedit facere
        eaque saepe voluptas corporis mollitia, quis quisquam quasi
      </Text>
    </SafeAreaView>
  );
};

export default Catalog;

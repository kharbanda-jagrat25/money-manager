import React from 'react';
import { View, Text, Button } from 'react-native';

const Catalogue = ({ navigation }) => {
  return (
    <View>
      <Text>Money Manager - Catalogue</Text>
      <Button
        title="Add Expense"
        onPress={() => navigation.navigate('AddExpense')}
      />
    </View>
  );
};

export default Catalogue;
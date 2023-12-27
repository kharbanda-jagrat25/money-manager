import React from 'react';
import { View, Text, Button } from 'react-native';

const History = ({ navigation }) => {
  return (
    <View>
      <Text>Money Manager - History</Text>
      <Button
        title="Add Expense"
        onPress={() => navigation.navigate('AddExpense')}
      />
    </View>
  );
};

export default History;
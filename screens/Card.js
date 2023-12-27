import React from 'react';
import { View, Text, Button } from 'react-native';

const Card = ({ navigation }) => {
  return (
    <View>
      <Text>Money Manager - Card</Text>
      <Button
        title="Add Expense"
        onPress={() => navigation.navigate('AddExpense')}
      />
    </View>
  );
};

export default Card;
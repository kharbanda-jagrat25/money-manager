import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";

import CardToCardIcon from "../../assets/icons/cardToCard.png";
import MusicIcon from "../../assets/icons/music.png";
import TransportIcon from "../../assets/icons/transport.png";
import { checkIfObjectsAreShallowEqual } from "../../utility/utils";

const styles = StyleSheet.create({
  transactionDate: {
    fontSize: 16,
    marginLeft: "4.3%",
    fontWeight: 700,
    color: "#fff",
    marginTop: "12%",
    marginBottom: "2%",
  },
  individualHistoryContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  history: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    borderBottomWidth: "1px",
    borderBottomColor: "rgba(32, 43, 72, 1)",
    paddingTop: "5%",
    paddingBottom: "5%",
    paddingRight: "4.3%",
  },
  amount: {
    fontSize: 16,
    fontWeight: 700,
    color: "#fff",
  },
  info: {
    marginLeft: "2%",
  },
  name: {
    marginBottom: "4%",
    fontWeight: 500,
    fontSize: 16,
    color: "#fff",
  },

  category: {
    color: "#94A3D3",
    fontSize: 14,
    fontWeight: 500,
  },
  logo: {
    width: 70,
    height: 70,
  },
});

const CARD_TO_CARD = "Card to Card";
const APPLE_MUSIC = "Apple Music";
const UBER = "Uber";
const MARIA = "Maria";
const ONLINE = "Online";
const SERVICE = "Service";
const CREDIT = "credit";
const DEBIT = "debit";
const data = [
  {
    "20 April": [
      {
        name: CARD_TO_CARD,
        category: MARIA,
        amount: 143,
        type: CREDIT,
        accountNumber: 'xxxxxxxxxxx4586',
        dateTime: '21/09/2023 10:12 A.M.'
      },
      {
        name: APPLE_MUSIC,
        category: ONLINE,
        amount: 467,
        type: DEBIT,
        accountNumber: 'xxxxxxxxxxx4315',
        dateTime: '19/09/2023 12:49 P.M.'
      },
      {
        name: UBER,
        category: SERVICE,
        amount: 467,
        type: DEBIT,
        accountNumber: 'xxxxxxxxxxx5231',
        dateTime: '16/09/2023 9:54 A.M.'
      },
      {
        name: UBER,
        category: SERVICE,
        amount: 43,
        type: DEBIT,
        accountNumber: 'xxxxxxxxxxx2562',
        dateTime: '14/09/2023 4:12 P.M.'
      },
      {
        name: CARD_TO_CARD,
        category: SERVICE,
        amount: 2467,
        type: DEBIT,
        accountNumber: 'xxxxxxxxxxx6323',
        dateTime: '08/09/2023 8:36 P.M.'
      },
    ],
    "12 March": [
      {
        name: CARD_TO_CARD,
        category: MARIA,
        amount: 1443,
        type: CREDIT,
        accountNumber: 'xxxxxxxxxxx9052',
        dateTime: '02/09/2023 06:53 P.M.'
      },
      {
        name: UBER,
        category: SERVICE,
        amount: 43,
        type: DEBIT,
        accountNumber: 'xxxxxxxxxxx4923',
        dateTime: '29/08/2023 01:26 P.M.'
      },
      {
        name: CARD_TO_CARD,
        category: SERVICE,
        amount: 12,
        type: CREDIT,
        accountNumber: 'xxxxxxxxxxx9593',
        dateTime: '24/08/2023 11:52 A.M.'
      },
      {
        name: APPLE_MUSIC,
        category: ONLINE,
        amount: 47,
        type: DEBIT,
        accountNumber: 'xxxxxxxxxxx7582',
        dateTime: '18/08/2023 09:25 P.M.'
      },
      {
        name: UBER,
        category: SERVICE,
        amount: 67,
        type: DEBIT,
        accountNumber: 'xxxxxxxxxxx1934',
        dateTime: '15/08/2023 03:30 P.M.'
      },
    ],
  },
];

const TransactionList = () => {
  const [showDetails, setShowDetails] = useState(null);

  const getImagesource = (name) => {
    switch (name) {
      case CARD_TO_CARD:
        return CardToCardIcon;
      case APPLE_MUSIC:
        return MusicIcon;
      default:
        return TransportIcon;
    }
  };

  const handleTransactionRowPress = (date, index) => setShowDetails(checkIfObjectsAreShallowEqual(showDetails, { date, index })
    ? null
    : { date, index }
  );

  return (
    <View>
    {data.map((dateGroup) => {
      return Object.keys(dateGroup).map((date) => {
        const transactions = dateGroup[date];
        return (
          <View key={date} style={{ marginTop: "4%" }}>
            <Text style={styles.transactionDate}>{date}</Text>
            {transactions?.map(
              ({ name, amount, category, type, accountNumber, dateTime }, index) => (
                <Pressable onPress={() => handleTransactionRowPress(date, index)}>
                  <View
                    style={styles.individualHistoryContainer}
                    key={index}
                  >
                    <Image
                      source={getImagesource(name)}
                      style={styles.logo}
                    />
                    <View style={styles.history}>
                      <View style={styles.info}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.category}>{category}</Text>
                        {checkIfObjectsAreShallowEqual(showDetails, { date, index }) && (
                          <View>
                            <Text style={styles.category}>{accountNumber}</Text>
                            <Text style={styles.category}>{dateTime}</Text>
                          </View>
                        )}
                      </View>
                      <Text style={styles.amount}>
                        {type === CREDIT ? "+" : "-"}$
                        {amount?.toLocaleString("en", {
                          minimumFractionDigits: 2,
                        })}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              )
            )}
          </View>
        );
      });
    })}
  </View>
  );
};

export default TransactionList;
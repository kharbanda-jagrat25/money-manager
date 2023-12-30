import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";

import CardToCardIcon from "../../assets/icons/cardToCard.svg";
import MusicIcon from "../../assets/icons/music.svg";
import TransportIcon from "../../assets/icons/transport.svg";

const TransactionList = () => {
  const styles = StyleSheet.create({
    transactionDate: {
      fontSize: "16px",
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
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "26px",
      color: "#fff",
    },
    info: {
      marginLeft: "2%",
    },
    name: {
      marginBottom: "4%",
      fontWeight: 500,
      fontSize: "16px",
      color: "#fff",
    },

    category: {
      color: "#94A3D3",
      fonSize: "14px",
      fontWeight: 500,
    },
    logo: {
      width: "70px",
      height: "70px",
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
        },
        {
          name: APPLE_MUSIC,
          category: ONLINE,
          amount: 467,
          type: DEBIT,
        },
        {
          name: UBER,
          category: SERVICE,
          amount: 467,
          type: DEBIT,
        },
        {
          name: UBER,
          category: SERVICE,
          amount: 43,
          type: DEBIT,
        },
        {
          name: CARD_TO_CARD,
          category: SERVICE,
          amount: 2467,
          type: DEBIT,
        },
      ],
      "12 March": [
        {
          name: CARD_TO_CARD,
          category: MARIA,
          amount: 1443,
          type: CREDIT,
        },
        {
          name: UBER,
          category: SERVICE,
          amount: 43,
          type: DEBIT,
        },
        {
          name: CARD_TO_CARD,
          category: SERVICE,
          amount: 12,
          type: CREDIT,
        },
        {
          name: APPLE_MUSIC,
          category: ONLINE,
          amount: 47,
          type: DEBIT,
        },
        {
          name: UBER,
          category: SERVICE,
          amount: 67,
          type: DEBIT,
        },
      ],
    },
  ];

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

  return (
    <View>
    {data.map((dateGroup) => {
      return Object.keys(dateGroup).map((date) => {
        const transactions = dateGroup[date];
        return (
          <View key={date} style={{ marginTop: "4%" }}>
            <Text style={styles.transactionDate}>{date}</Text>
            {transactions?.map(
              ({ name, amount, category, type }, index) => (
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
                    </View>
                    <Text style={styles.amount}>
                      {type === CREDIT ? "+" : "-"}$
                      {amount?.toLocaleString("en", {
                        minimumFractionDigits: 2,
                      })}
                    </Text>
                  </View>
                </View>
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
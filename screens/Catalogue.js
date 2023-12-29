import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import GradientContainer from './components/GradientContainer';
import Header from './components/Header';

import MobileIcon from "../assets/icons/mobile.svg";
import WifiIcon from "../assets/icons/wifi.svg";
import CarIcon from "../assets/icons/car.svg";
import HouseIcon from "../assets/icons/house.svg";
import UtilityIcon from "../assets/icons/utility.svg";


const styles = StyleSheet.create({
  container: {
    marginLeft: '4.3%',
    marginRight: "4.3%"
  },
  catalogueContainer: {
    marginTop: "10%"
  },
  individualCatalogueContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  catalogue: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    borderBottomWidth: "2px",
    borderBottomColor: "#2D3757",
    paddingTop: "4%",
    paddingBottom: "4%",
  },
  info: {
    marginLeft: "2%",
  },
  category: {
    marginBottom: "4%",
    fontWeight: 500,
    fontSize: "16px",
    color: "#fff",
  },

  debt: {
    color: "#94A3D3",
    fonSize: "14px",
    fontWeight: 700,
  },
  payButton: {
    width: "65px",
    height: " 38px",
    borderRadius: "10px",
    border: "1px solid #7295FB66",
    color: "#7295FB",
    fontSize: "16px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  disabled: {
    opacity: 0.2,
    pointerEvents: 'none',
  }
});

const catalogueList = [{
  icon: MobileIcon,
  debt: 34,
  category: 'Mobile'
},
{
  icon: WifiIcon,
  debt: 21,
  category: 'Internet and TV'
},
{
  icon: CarIcon,
  debt: 1221,
  category: 'Traffic Fines'
},
{
  icon: HouseIcon,
  debt: 0,
  category: 'Housing Services'
},
{
  icon: UtilityIcon,
  debt: 442,
  category: 'Utility Payment'
}]

const Catalogue = ({ navigation }) => {
  return (
    <GradientContainer>
      <View style={styles.container}>
        <Header showLogo heading="Catalogue" />
        <View style={styles.catalogueContainer}>
          {catalogueList?.map(({ icon, debt, category }) => (
            <View style={styles.individualCatalogueContainer}>
              <img src={icon} alt={category} style={styles.icon} />
              <View style={styles.catalogue}>
                <View style={styles.info}>
                  <Text style={styles.category}>{category}</Text>
                  <Text style={styles.debt}>
                    The debt is ${debt?.toLocaleString("en", { minimumFractionDigits: 2 })}
                  </Text>
                </View>
                <Pressable onPress={() => { }}>
                  <Text style={{
                    ...styles.payButton,
                    ...!debt && styles.disabled
                  }}>
                    Pay
                  </Text>
                </Pressable>
              </View>
            </View>
          ))}
        </View>

      </View>
    </GradientContainer>
  );
};

export default Catalogue;
import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

import GradientContainer from './components/GradientContainer';
import Header from './components/Header';

import MobileIcon from "../assets/icons/mobile.png";
import WifiIcon from "../assets/icons/wifi.png";
import CarIcon from "../assets/icons/car.png";
import HouseIcon from "../assets/icons/house.png";
import UtilityIcon from "../assets/icons/utility.png";


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
    fontSize: 16,
    color: "#fff",
  },

  debt: {
    color: "#94A3D3",
    fontSize: 14,
    fontWeight: 700,
  },
  payButton: {
    width: 65,
    height: 38,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#7295FB66",
    fontSize: 16,
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  payButtonText: {
    color: "#7295FB",
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.2,
    pointerEvents: 'none',
  },
  icon: {
    width: 50,
    height: 50,
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
          {catalogueList?.map(({ icon, debt, category }, index) => (
            <View key={`${category}_${index}`} style={styles.individualCatalogueContainer}>
              <Image source={icon} style={styles.icon} />
              <View style={styles.catalogue}>
                <View style={styles.info}>
                  <Text style={styles.category}>{category}</Text>
                  <Text style={styles.debt}>
                    The debt is ${debt?.toLocaleString("en", { minimumFractionDigits: 2 })}
                  </Text>
                </View>
                <View>
                  <Pressable onPress={() => { }} style={{
                    ...styles.payButton,
                    ...!debt ? styles.disabled : {}
                  }}>
                    <Text style={styles.payButtonText}>Pay</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          ))}
        </View>

      </View>
    </GradientContainer>
  );
};

export default Catalogue;
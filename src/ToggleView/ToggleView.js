import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { COLORS } from "../../assets/constants/constants";
import { ListView } from "../ListView/ListView";
import { MapList } from "../MapList/MapList";

export const ToggleView = ({ data }) => {
  const [currentPage, setCurrentPage] = useState("Map View");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.toggleBox}>
        <TouchableOpacity
          onPress={() => setCurrentPage("Map View")}
          style={
            currentPage === "Map View" ? styles.selected : styles.unselected
          }
        >
          <Text
            style={
              currentPage === "Map View"
                ? styles.selectedText
                : styles.unselectedText
            }
          >
            Map View
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrentPage("List View")}
          style={
            currentPage === "List View" ? styles.selected : styles.unselected
          }
        >
          <Text
            style={
              currentPage === "List View"
                ? styles.selectedText
                : styles.unselectedText
            }
          >
            List View
          </Text>
        </TouchableOpacity>
      </View>
      {currentPage === "List View" ? <ListView data={data}/> : <MapList data={data}/>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toggleBox: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  selected: {
    backgroundColor: COLORS.purple,
    flex: 1,
    padding: 10,
  },
  selectedText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 18,
    fontFamily: 'MavenPro-Medium',
  },
  unselectedText: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: 'MavenPro-Medium',
  },
  unselected: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f1f1f1",
  },
});

import { View, Text, StyleSheet, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.heading}>Welcome To Movie App</Text>
      <View style={styles.btn}>
        <Button
          color={"#e76f51"}
          title="Explore Movies"
          onPress={() => navigation.navigate("Movie")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#343a40",
  },
  heading: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "600",
    marginBottom: 20,
  },
  btn: {
    width: "60%",
  },
});

export default Home;

import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
  Image,
} from "react-native";

const Movie = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [movieList, setMovieList] = useState();

  const inputHandler = (text) => {
    setSearchTxt(text);
  };
  const searchBtnHandler = async () => {
    const data = await fetch(
      `http://www.omdbapi.com/?apikey=1af09d5c&s=${searchTxt}`
    );
    const json = await data.json();
    setMovieList(json.Search);
  };

  return (
    <View style={styles.container}>
      <View style={styles.movieContainer}>
        <TextInput
          style={styles.inputBox}
          placeholder="Find a movie here..."
          value={searchTxt}
          onChangeText={inputHandler}
        />
        <View style={styles.btn}>
          <Button
            color={"#e76f51"}
            title="Search Movie"
            onPress={searchBtnHandler}
          />
        </View>
        <View>
          {movieList && (
            <Text style={styles.foundText}>
              {movieList?.length} : Movie Found
            </Text>
          )}

          <FlatList
            data={movieList}
            renderItem={({ item }) => {
              return (
                <View style={styles.movieCard}>
                  <Image
                    style={styles.moviePoster}
                    source={{ uri: item?.Poster }}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.movieTitle}>{item.Title}</Text>
                    <Text style={styles.movieYear}>
                      Year :{" "}
                      <Text style={{ color: "#fff", fontWeight: "400" }}>
                        {item.Year}
                      </Text>
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#343a40",
  },
  movieContainer: {
    marginTop: 90,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 110,
  },
  inputBox: {
    borderWidth: 1,
    padding: 10,
    borderColor: "#ced4da",
    borderRadius: 5,
    width: "75%",
    backgroundColor: "#adb5bd",
    fontSize: 18,
  },
  btn: {
    width: "50%",
    marginTop: 20,
  },
  foundText: {
    color: "#70e000",
    fontSize: 18,
    marginTop: 5,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "600",
  },
  moviePoster: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  movieCard: {
    backgroundColor: "#495057",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  movieTitle: {
    marginTop: 5,
    fontSize: 18,
    color: "#ffba08",
  },
  movieYear: {
    fontSize: 16,
    color: "#70e000",
    fontWeight: "600",
  },
  textContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
});

export default Movie;

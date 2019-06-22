import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image
} from "react-native";

class Movie extends Component {

    keyExtractor = (item, index) => item.imdbID;

    onMovieClick = (id, title) => {
        this.props.navigation.navigate('Details', {
            itemId: id,
            otherParam: title
        });
    }

    renderItem = (movie) => {
        let noImage = 'https://uae.microless.com/cdn/no_image.jpg';
        return (
            <TouchableOpacity onPress={() => this.onMovieClick(movie.item.imdbID, movie.item.Title)}>
                <View style={styles.movie}>
                    <Image
                        style={styles.image}
                        source={movie.item.Poster == 'N/A' ? { uri: noImage } : { uri: movie.item.Poster }}
                    />
                    <View style={styles.data}>
                        <Text style={styles.text}>Title: {movie.item.Title}</Text>
                        <Text style={styles.text}>Year: {movie.item.Year}</Text>
                    </View>
                </View>
            </TouchableOpacity >
        );
    }

    render() {
        var { value, movies } = this.props;
        if (!movies) {
            return (
                <View style={styles.container}>
                    <Text style={styles.text}>No Movies were found!</Text>
                </View>
            )
        }
        return (
            <FlatList
                style={styles.flatList}
                data={movies.filter(movie => {
                    if (movie.Title.toLowerCase().includes(value.toLowerCase())) {
                        return movie.Title
                    }
                })}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
            />
        );
    }
}
export default Movie;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        margin: 5
    },
    movie: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 3
    },
    data: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        fontSize: 22,
        color: 'green'
    },
    flatList: {
        height: '90%'
    }
});
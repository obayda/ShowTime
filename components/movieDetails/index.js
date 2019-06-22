import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class MovieDeatils extends Component {
    render() {
        const { movie } = this.props;
        let noImage = 'https://uae.microless.com/cdn/no_image.jpg';
        return (
            <View style={styles.actionBar}>
                <View style={styles.container}>
                    <Text style={styles.title}>{movie.Title}</Text>
                    <Image
                        style={styles.image}
                        source={movie.Poster == 'N/A' ? { uri: noImage } : { uri: movie.Poster }}
                    />
                    <View style={styles.textView}>
                        <Text style={styles.textViewSize}>
                            {movie.Released == 'N/A' ? "Release date wasn't provided" : movie.Released}
                        </Text>
                        <Text style={styles.textViewSize}>{movie.Genre}</Text>
                        <Text style={styles.textViewSize}>{movie.Plot}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
export default MovieDeatils;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#e1e5ed',
    },
    image: {
        justifyContent: 'center',
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: 10
    },
    title: {
        marginTop: 20,
        fontSize: 28,
        textAlign: 'center'
    },
    textView: {
        flex: 1,
        alignItems: 'center',
        width: 350,
        marginTop: 20,
    },
    textViewSize: {
        fontSize: 20
    }
});
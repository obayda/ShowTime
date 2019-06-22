import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class MovieDeatils extends Component {
    render() {
        const { movie } = this.props;
        return (
            <View style={styles.container}>
                <Text>{movie.Title}</Text>
            </View>
        );
    }
}
export default MovieDeatils;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
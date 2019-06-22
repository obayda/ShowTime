import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import SearchBar from '../../components/searchBar'

class HomeScreen extends Component {
    state = {
        value: ''
    }

    searchBtn = () => {
        this.props.navigation.navigate('Movies', {
            itemId: this.state.value,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <SearchBar
                    defaultValue={this.state.value}
                    styles={styles.textInput}
                    onChangeText={text => this.setState({ value: text })}
                    placeholder="Search by Movie Title..." />
                <Button title='Search' onPress={this.searchBtn} />
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        fontSize: 23,
        borderBottomColor: 'green',
        borderBottomWidth: 2,
        marginBottom: 10
    }
});
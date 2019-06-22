import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import Movie from '../../components/movie';
import SearchBar from '../../components/searchBar';

class Movies extends Component {
    state = {
        data: [],
        value: ''
    }
    componentDidMount() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        fetch('http://www.omdbapi.com/?s=' + itemId + '&apikey=5818336b')
            .then(res => res.json())
            .then(movies => this.setState({ data: movies.Search }))
            .catch(error => { console.log(error) })
    }
    render() {
        const { data, value } = this.state;
        return (
            <View>
                <SearchBar
                    defaultValue={this.state.value}
                    styles={styles.textInput}
                    onChangeText={text => this.setState({ value: text })}
                    placeholder="Type here..." />
                <Movie movies={data} value={value} navigation={this.props.navigation} />
            </View>
        );
    }
}
export default Movies;

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
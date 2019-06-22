import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import MovieDetails from '../../components/movieDetails'

class Details extends Component {
    state = {
        data: []
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('otherParam'),
        };
    };

    componentDidMount() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        fetch("http://www.omdbapi.com/?i=" + itemId + "&apikey=5818336b")
            .then(res => res.json())
            .then(data => this.setState({ data }))
            .catch(err => console.log(err))
    }

    render() {
        const { data } = this.state;
        return (
            <MovieDetails navigation={this.props.navigation} movie={data} />
        );
    }
}
export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
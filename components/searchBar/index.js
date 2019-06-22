import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from "react-native";

class SearchBar extends Component {
    render() {
        const { styles, placeholder, defaultValue, onChangeText } = this.props;
        return (
            <TextInput onChangeText={onChangeText} defaultValue={defaultValue} style={styles} placeholder={placeholder} />
        );
    }
}
export default SearchBar;
import React from 'react';
import { View } from 'react-native';

const CardSection = props => {
    const { containerStyle } = styles;

    return (
        < View style={containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        padding: 5,
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#DDD',
        position: 'relative'
    }
};

export default CardSection;

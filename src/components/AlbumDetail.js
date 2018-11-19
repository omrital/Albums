import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image } = album;
    const { headerStyle,
        thumbnailStyle,
        thumbnailContainerStyle,
        imageStyle,
        headerTextStyle } = styles;

    return (

        // /*
        <Card>

            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>

                <View style={headerStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>



            <CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri: image }}
                />
            </CardSection>

        </Card>
// */


/*
        <Image
            style={imageStyle}
            source={{ uri: 'https://i.imgur.com/K3KJ3w4h.jpg' }}
        />
        */




    );
};

const styles = {
    headerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    }
};

export default AlbumDetail;

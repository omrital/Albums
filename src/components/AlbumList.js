import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios';

class AlbumList extends Component {
    state = { albums: [] }

    componentWillMount() {
        this.fetchAlbums();
    }

    async fetchAlbums() {
        const albums = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
        this.setState({ albums: albums.data });
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>);
    }

    renderAlbums() {
        console.log(this.state.albums);

        return this.state.albums.map((album) => (
            <AlbumDetail key={album.title} album={album} />
        ));


        // const album = this.state.albums[0];
        // if (!album) {
        //     return [];
        // }
        // return <AlbumDetail key={album.title} album={album} />;
    }
}

export default AlbumList;

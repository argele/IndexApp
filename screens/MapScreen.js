import React, { Component } from 'react';
import { View , Text, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';


class MapScreen extends Component {
state = {
    mapLoaded: false,
    region: {
        longitude: -99.133,
        latitude: 19.432,
        longitudeDelta: 0.1,
        latitudeDelta: 0.09
    }
}

componentDidMount(){
    this.setState({ mapLoaded: true });
}

render(){
    if(!this.state.mapLoaded){
return ( <View style={{ flex: 1, justifyContent: 'center' }}>

<ActivityIndicator size="large" />
</View>    
    );
    }

    return(
        <View style={{ flex: 1 }}> 
            <MapView 
            region = {this.state.region}
            style={{ flex: 1 }} />
                 </View>
        );
    }
}

export default MapScreen;
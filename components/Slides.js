import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
//Dimensions
const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {


renderLastSlide(index) {
    if (index === this.props.data.length - 1) {

        return (
          <Button
          title="FACEBOOK LOG IN"
          raised
          buttonStyle={styles.buttonStyle}
          onPress={this.props.onComplete}
          />
        );
    }
}

    //HelperMethod to Map Every Slide data 

    renderSlides = () => {
        return this.props.data.map((slide, index) => {
          return (
            <View 
            key={slide.text} 
            style={[styles.slideStyle, { backgroundColor: slide.color }]}
            >
              <Text style={styles.textStyle}>{slide.text}</Text>
              
                {this.renderLastSlide(index)}
            </View>
          );
        });
      }

    render() {
        return(
            //ScrollViewHorizontal Trip
            <ScrollView
                horizontal
                style={{ flex: 1 }}
                pagingEnabled
            >           
            {this.renderSlides()}
                </ScrollView>
        );
    }
}

const styles = {
    slideStyle:{
            flex: 1,
            justifyContent: 'center',
            alignItems:'center',
            width: SCREEN_WIDTH
    },
    textStyle: {
        fontSize: 50,  color : 'white'
    },

    buttonStyle:{
        backgroundColor: '#0288D1',
        marginTop: 1

    }
};

export default Slides;
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';

export default class Spinner extends React.Component {

    state = {
        status: true
    }

    // the state will remain true for 2 seconds then it will turn false
    componentDidMount(){

        setTimeout(() => {
            this.setState({
                status: false
            })
        }, 2000)
    }

    render(){

        return (
            <View style = {styles.container}>
                {this.state.status ? <ActivityIndicator size = 'large' color = '#03c4ff'/> : this.props.navigation.navigate('Identification (3/1)') }
            </View>
       
          );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
  signupbtn: {
      fontSize: 22, 
      color: '#fff'
  }
});

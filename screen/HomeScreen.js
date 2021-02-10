import React from 'react';
import { View, Button } from 'react-native';
import { Text } from 'react-native-elements';
import SearchBarComponent from '../components/SearchBar';
import Formulae from '../components/Formulae'


class HomeScreen extends React.Component{

  render(){
  let navigation = this.props.navigation

  return (
  <>
    <SearchBarComponent />
    <View style={styles.screen}>
      <View style={styles.mainText}>
        <Text h2> Popular Formulas</Text>
      </View>
      <View style={styles.formulae}>
        <Formulae/>
      
      </View>
    </View>
  </>
  )
}
}

const styles={
  screen:{
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'space-around',
  },
  mainText:{
    alignSelf:"center",
  },
  formulae:{
    flexDirection:'row',
    flexWrap:"wrap",
    height:'15%',
    justifyContents:"space-around",
    marginTop:"4vh"
  }
}


export default HomeScreen;




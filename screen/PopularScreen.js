import React from 'react'
import { View , Button} from 'react-native'
import { Text } from 'react-native-elements';
import SearchBarComponent from '../components/SearchBar'


function PopularScreen({ navigation }){
  return (
    <>
    <SearchBarComponent />
    <View style={styles.container}>
        <Text>Open up App.js re to start working on your app!</Text>
        <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
        {/* <StatusBar style="auto" /> */}
    </View>
    </>
  )
}

const styles={
  container:{
    flex: 1,
    backgroundColor: '#cff',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default PopularScreen
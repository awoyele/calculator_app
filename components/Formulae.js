import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';



class Formulae extends React.Component{
  render(){
    return this.props.formulae.map((formula,ind) =>(
      <View key={ind} style={styles.formula}>
        <Text h5>{formula.name}</Text>
        <Text style={styles.formulaString}>{formula.variations[0].string}</Text>
      </View>
    ))
    
  }
}

const styles={
  formula:{
    marginVertical: "5px",
    marginHorizontal:'auto',
    paddingHorizontal: '2vw',
    paddingVertical: '1vw',
    alignItems:"center",
    height: "100%",
    width: '45%',
    border: "1px solid gray",
    borderRadius: "3%",
    backgroundImage: "linear-gradient(to bottom right, #f8a, #9cf, #8af, #38f)"
  },
  background: {
    position: 'absolute'
  },
  formulaString:{
    padding:"2vw"
  }
}

const calcTileDimensions = (deviceWidth, tpr) => {
    const margin = deviceWidth / (tpr * 10);
    const size = (deviceWidth - margin * (tpr * 2)) / tpr;
    return { size, margin };
};

const mapStateToProps = (state) => {
    return { formulae: state.formula } 
  };
  
  export default connect(mapStateToProps)(Formulae);
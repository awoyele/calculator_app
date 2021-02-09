import React from 'react'
import { View, Button } from 'react-native'
import { Text, Card } from 'react-native-elements';
import { connect, useDispatch } from 'react-redux';


class Formulae extends React.Component{
    render(){
        {this.props.formulae.map((formula,ind) =>(
            <>
            <View key={ind} style={styles.formula}>
              <Text h5>{formula.name}</Text>
              <Text style={styles.formulaString}>{formula.variations[0].string}</Text>
            </View>
            <Card key={ind} style={styles.formula} title={formula.name} caption ={formula.variations[0].string}>
            </Card>
            </>
          )
          )}
    }
}

const styles={}
const calcTileDimensions = (deviceWidth, tpr) => {
    const margin = deviceWidth / (tpr * 10);
    const size = (deviceWidth - margin * (tpr * 2)) / tpr;
    return { size, margin };
};

const mapStateToProps = (state) => {
    return { formulae: state.formula } 
  };
  
  export default connect(mapStateToProps)(Formulae);
import React from 'react'
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';

class SearchBarComponent extends React.Component{
  render(){
    return (
      <SearchBar
      round
      placeholder="Search for Formula..."
      onChangeText={(ev)=>this.props.addSearchTerm(ev)}
      value={this.props.search.term}
    />
    )
  }
}

const mapStateToProps = (state) => {
  const { search } = state
  return { search }
};

const mapDispatchToProps = dispatch => {
  return {
    addSearchTerm: (term) => dispatch({ type: 'ADD_TERM', payload:term }),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBarComponent);
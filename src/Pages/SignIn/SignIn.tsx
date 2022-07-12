import React from 'react';
import { connect } from 'react-redux';
import { mapStateTypes } from '../../globalTypes/mapStateTypes';

class SignIn extends React.Component {
  
  render() {
    return (
      <h1>
        Area de LogIn
      </h1>
    )
  }
}

const mapStateToProps = (state: mapStateTypes) => ({
  userData: state.userReducer,
  monthlyPayment: state.manegersReducer,
})

export default connect(mapStateToProps, null)(SignIn);

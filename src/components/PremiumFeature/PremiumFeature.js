import React from 'react';
import { connect } from 'react-redux';

function PremiumFeature(props) {
  const captured = event => {
    console.log('elem captured ');
    if (!props.isSubscribed) {
      event.stopPropagation();
      console.log('TIENES QUE SUSCRIBIRTE');
    }
  };

  console.log(props.children);
  return <div onClickCapture={captured}>{props.children}</div>;
}

const mapStateToProps = state => ({
  isSubscribed: state.subscription.isSubscribed
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PremiumFeature);

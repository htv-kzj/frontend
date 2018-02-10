import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectVehicle } from './actions';
import SideBar from '../../Components/DesktopSideBar/index.js';

class AppView extends Component {
  constructor(props) {
    super(props);
    this.selectVehicleHandler = this.selectVehicleHandler.bind(this);
  }

  selectVehicleHandler(id) {
    this.props.selectVehicleTab(id);
  }

  render() {
    return (
      <SideBar
        selectedVehicleId={this.props.selectedVehicleId}
        clickHandler={this.selectVehicleHandler}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedVehicleId: state.vehicleEvent.selectedVehicleId,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    selectVehicleTab: id => {
      dispatch(selectVehicle(id))
    }
  }
};

const ConnectedAppView = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppView)

export default ConnectedAppView;

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectVehicle } from './actions';
import SideBar from '../../Components/DesktopSideBar/index.js';
import Map from '../../Components/Map/index.js';

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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          width: '100vw',
        }}
      >
        <Map
          vehicles={this.props.vehicles}
          clickHandler={this.selectVehicleHandler}
          selectedVehicle={this.props.selectedVehicle}
        />
        <SideBar
          vehicles={this.props.vehicles}
          selectedVehicle={this.props.selectedVehicle}
          clickHandler={this.selectVehicleHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    vehicles: state.vehicleEvent.vehicles,
    selectedVehicle: state.vehicleEvent.selectedVehicle,
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

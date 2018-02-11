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
          selectedVehicleId={this.props.selectedVehicleId}
          clickHandler={this.selectVehicleHandler}
        />
        <SideBar
          selectedVehicleId={this.props.selectedVehicleId}
          clickHandler={this.selectVehicleHandler}
          vehicles={this.props.vehicles}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedVehicleId: state.vehicleEvent.selectedVehicleId,
    vehicles: state.vehicleEvent.vehicles,
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

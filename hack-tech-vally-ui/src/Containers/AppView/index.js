import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectVehicle, sideBarToggled } from './actions';
import SideBar from '../../Components/DesktopSideBar/index.js';
import Map from '../../Components/Map/index.js';


class AppView extends Component {
  constructor(props) {
    super(props);
    this.selectVehicleHandler = this.selectVehicleHandler.bind(this);
    this.sideBarToggledHandler = this.sideBarToggledHandler.bind(this);
  }

  selectVehicleHandler(id) {
    this.props.selectVehicleTab(id);
  }

  sideBarToggledHandler() {
    this.props.sideBarToggledAction();
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
          toggleHandler={this.sideBarToggledHandler}
        />
        <SideBar
          selectedVehicleId={this.props.selectedVehicleId}
          clickHandler={this.selectVehicleHandler}
          vehicles={this.props.vehicles}
          toggleHandler={this.sideBarToggledHandler}
          sideBarToggled={this.props.sideBarToggled}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedVehicleId: state.vehicleEvent.selectedVehicleId,
    vehicles: state.vehicleEvent.vehicles,
    sideBarToggled: state.vehicleEvent.sideBarToggled,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    selectVehicleTab: id => {
      dispatch(selectVehicle(id))
    },
    sideBarToggledAction: () => {
      dispatch(sideBarToggled())
    }
  }
};

const ConnectedAppView = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppView)

export default ConnectedAppView;

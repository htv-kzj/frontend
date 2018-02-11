import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectVehicle, sideBarToggled, popOverToggled, tableToggled, graphPopToggled, analyticsToggled } from './actions';
import SideBar from '../../Components/DesktopSideBar/index.js';
import Map from '../../Components/Map/index.js';

class AppView extends Component {
  constructor(props) {
    super(props);
    this.selectVehicleHandler = this.selectVehicleHandler.bind(this);
    this.sideBarToggledHandler = this.sideBarToggledHandler.bind(this);
    this.popOverToggledHandler = this.popOverToggledHandler.bind(this);
    this.tableToggledHandler = this.tableToggledHandler.bind(this);
    this.analyticsToggledHandler = this.analyticsToggledHandler.bind(this);
  }

  selectVehicleHandler(id) {
    this.props.selectVehicleTab(id);
  }

  sideBarToggledHandler() {
    this.props.sideBarToggledAction();
  }

  popOverToggledHandler(isToggled) {
    this.props.popOverToggledAction(isToggled);
  }

  tableToggledHandler(isToggled) {
    this.props.tableToggledAction(isToggled);
  }

  analyticsToggledHandler(isToggled) {
    this.props.analyticsToggledAction(isToggled);
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
          toggleHandler={this.sideBarToggledHandler}
          popOverHandler={this.popOverToggledHandler}
          popOverToggled={this.props.popOverToggled}
          tableHandler={this.tableToggledHandler}
          tableToggled={this.props.tableToggled}
          graphPopHandler={this.graphPopToggledHandler}
          graphPopToggled={this.props.graphPopToggled}
          analyticsHandler={this.analyticsToggledHandler}
          analyticsToggled={this.props.analyticsToggled}
        />
        <SideBar
          vehicles={this.props.vehicles}
          toggleHandler={this.sideBarToggledHandler}
          sideBarToggled={this.props.sideBarToggled}
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
    sideBarToggled: state.vehicleEvent.sideBarToggled,
    popOverToggled: state.vehicleEvent.popOverToggled,
    tableToggled: state.vehicleEvent.tableToggled,
    analyticsToggled: state.vehicleEvent.analyticsToggled,
    selectedVehicle: state.vehicleEvent.selectedVehicle,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    selectVehicleTab: id => {
      dispatch(selectVehicle(id))
    },
    sideBarToggledAction: () => {
      dispatch(sideBarToggled())
    },
    popOverToggledAction: (isToggled) => {
      dispatch(popOverToggled(isToggled))
    },
    tableToggledAction: (isToggled) => {
      dispatch(tableToggled(isToggled))
    },
    analyticsToggledAction: (isToggled) => {
      dispatch(analyticsToggled(isToggled))
    },
  }
};

const ConnectedAppView = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppView)

export default ConnectedAppView;

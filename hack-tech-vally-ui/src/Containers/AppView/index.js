import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectVehicle, sideBarToggled, popOverToggled, tableToggled, graphPopToggled, recievedAll } from './actions';
import SideBar from '../../Components/DesktopSideBar/index.js';
import Map from '../../Components/Map/index.js';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class AppView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.selectVehicleHandler = this.selectVehicleHandler.bind(this);
    this.sideBarToggledHandler = this.sideBarToggledHandler.bind(this);
    this.popOverToggledHandler = this.popOverToggledHandler.bind(this);
    this.tableToggledHandler = this.tableToggledHandler.bind(this);
    this.graphPopToggledHandler = this.graphPopToggledHandler.bind(this);
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

  graphPopToggledHandler() {
    this.props.graphPopToggledAction();
  }

  render() {
    if(this.props.loading) {
      return null;
    }
    console.log('data', this.props.vehicles);
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
          vehicles={this.props.data.vehicles}
          clickHandler={this.selectVehicleHandler}
          selectedVehicle={this.props.selectedVehicle}
          toggleHandler={this.sideBarToggledHandler}
          popOverHandler={this.popOverToggledHandler}
          popOverToggled={this.props.popOverToggled}
          tableHandler={this.tableToggledHandler}
          tableToggled={this.props.tableToggled}
          graphPopHandler={this.graphPopToggledHandler}
          graphPopToggled={this.props.graphPopToggled}
          loading={this.props.data.loading}
        />
        <SideBar
          vehicles={this.props.data.vehicles}
          toggleHandler={this.sideBarToggledHandler}
          sideBarToggled={this.props.sideBarToggled}
          selectedVehicle={this.props.selectedVehicle}
          clickHandler={this.selectVehicleHandler}
          loading={this.props.data.loading}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sideBarToggled: state.vehicleEvent.sideBarToggled,
    popOverToggled: state.vehicleEvent.popOverToggled,
    tableToggled: state.vehicleEvent.tableToggled,
    graphPopToggled: state.vehicleEvent.graphPopToggled,
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
    graphPopToggledAction: () => {
      dispatch(graphPopToggled())
    },
    recievedAllAction: (data) => {
      dispatch(recievedAll(data))
    }
  }
};

const ConnectedAppView = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppView)

export default graphql(gql`
  query vehicleQuery {
    vehicles {
      vehicleid
      createdatetime
      lastupdatedatetime
      lastknowneventid
      enginehours
      lastknowndata {
        longitude
        latitude
        status
        location
      }
      displayname
      events {
        vehicleeventid,
        eventtypeid,
        longitude,
        latitude
        starttime
        endtime
        distance
        createdatetime
        heading
        eventtypeid
        location
        streetspeed
      }
    }
  }
`)(ConnectedAppView);

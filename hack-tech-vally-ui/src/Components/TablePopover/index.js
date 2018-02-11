import React from 'react';
import Paper from 'material-ui/Paper';
import windowSize from 'react-window-size';
import Bus from 'material-ui/svg-icons/maps/directions-bus';
import Explore from 'material-ui/svg-icons/action/explore';
import Announcement from 'material-ui/svg-icons/action/announcement';
import Expected from 'material-ui/svg-icons/maps/add-location';
import Stop from 'material-ui/svg-icons/av/stop';
import CircularProgress from 'material-ui/CircularProgress';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import style from './style.js';
import './style.css';
import GlobalStyle from '../../style.js';

const { themeColor } = GlobalStyle;
const precisionRound = (number, precision) => {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
};

const TablePopover = (props) => {
  let width = props.windowWidth >= 769 && props.windowWidth  - 315;
  let right = props.windowWidth >= 769 ? 10 : 0;
  let height = props.windowWidth >= 769 ? 500 : 500;
  let justifyContent = props.windowWidth >= 449 ? 'center' : 'flex-start';
  let bottom = props.tableToggled ? (props.windowWidth >= 769 ? '150px' : '10px') : '-600px';
  let position = props.tableToggled ? 'fixed' : 'fixed';

  return (
    <Paper
      className="paper"
      style={{
        ...style.paperStyle,
        width,
        height,
        right,
        bottom,
        position,
      }}
    >
      <div className="table" style={style.dataSetStyle}>
        <Table>
          <TableHeader
            adjustForCheckbox={false}
            displaySelectAll={false}
            >
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Location</TableHeaderColumn>
              <TableHeaderColumn>Event</TableHeaderColumn>
              <TableHeaderColumn style={{display: props.windowWidth < 449 && 'none'}}>Miles</TableHeaderColumn>
              <TableHeaderColumn style={{display: props.windowWidth < 449 && 'none'}}>Eng. Time</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
            >
            <div style={{paddingTop: 50, display: props.loading === false && 'none'}}>
              <CircularProgress color={themeColor} />
            </div>
            {props.vehicles.map((r) =>
              <TableRow>
                <TableRowColumn>{r.vehicleid}</TableRowColumn>
                <TableRowColumn>{r.lastknowndata[0].location}</TableRowColumn>
                <TableRowColumn>{r.lastknowndata[0].status}</TableRowColumn>
                <TableRowColumn style={{display: props.windowWidth < 449 && 'none'}}>{precisionRound(r.events[0].distance - r.events[r.events.length - 1].distance, 2)}</TableRowColumn>
                <TableRowColumn style={{display: props.windowWidth < 449 && 'none'}}>{r.enginehours}</TableRowColumn>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </Paper>
  );
}

export default windowSize(TablePopover);

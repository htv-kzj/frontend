import React from 'react';
import Paper from 'material-ui/Paper';
import windowSize from 'react-window-size';
import Bus from 'material-ui/svg-icons/maps/directions-bus';
import Explore from 'material-ui/svg-icons/action/explore';
import Announcement from 'material-ui/svg-icons/action/announcement';
import Expected from 'material-ui/svg-icons/maps/add-location';
import Stop from 'material-ui/svg-icons/av/stop';
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
              <TableHeaderColumn style={{display: props.windowWidth < 449 && 'none'}}>Exp. Time</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
            >
            {props.vehicles.map((r) =>
              <TableRow>
                <TableRowColumn>{r.vehicleId}</TableRowColumn>
                <TableRowColumn>{r.location}</TableRowColumn>
                <TableRowColumn>{r.eventStatus}</TableRowColumn>
                <TableRowColumn style={{display: props.windowWidth < 449 && 'none'}}>{r.milesTraveled}</TableRowColumn>
                <TableRowColumn style={{display: props.windowWidth < 449 && 'none'}}>{r.expectedTime}</TableRowColumn>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </Paper>
  );
}

export default windowSize(TablePopover);

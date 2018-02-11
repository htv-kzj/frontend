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
              <TableHeaderColumn>Event</TableHeaderColumn>
              <TableHeaderColumn>Miles</TableHeaderColumn>
              <TableHeaderColumn>Exp. vs Act.</TableHeaderColumn>
              <TableHeaderColumn>Idle</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
            >
            <TableRow>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>Randal White</TableRowColumn>
              <TableRowColumn>Unemployed</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>3</TableRowColumn>
              <TableRowColumn>Stephanie Sanders</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>4</TableRowColumn>
              <TableRowColumn>Steve Brown</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>5</TableRowColumn>
              <TableRowColumn>Christopher Nolan</TableRowColumn>
              <TableRowColumn>Unemployed</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>5</TableRowColumn>
              <TableRowColumn>Christopher Nolan</TableRowColumn>
              <TableRowColumn>Unemployed</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>5</TableRowColumn>
              <TableRowColumn>Christopher Nolan</TableRowColumn>
              <TableRowColumn>Unemployed</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>5</TableRowColumn>
              <TableRowColumn>Christopher Nolan</TableRowColumn>
              <TableRowColumn>Unemployed</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>5</TableRowColumn>
              <TableRowColumn>Christopher Nolan</TableRowColumn>
              <TableRowColumn>Unemployed</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>5</TableRowColumn>
              <TableRowColumn>Christopher Nolan</TableRowColumn>
              <TableRowColumn>Unemployed</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>5</TableRowColumn>
              <TableRowColumn>Christopher Nolan</TableRowColumn>
              <TableRowColumn>Unemployed</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>5</TableRowColumn>
              <TableRowColumn>Christopher Nolan</TableRowColumn>
              <TableRowColumn>Unemployed</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>5</TableRowColumn>
              <TableRowColumn>Christopher Nolan</TableRowColumn>
              <TableRowColumn>Unemployed</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </Paper>
  );
}

export default windowSize(TablePopover);

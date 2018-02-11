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
import { BarChart, Bar, Brush, Cell, CartesianGrid, ReferenceLine, ReferenceDot,
  XAxis, YAxis, Tooltip, Legend, ErrorBar, LabelList } from 'recharts';
import style from './style.js';
import './style.css';
import GlobalStyle from '../../style.js';

const AnalyticsPopover = (props) => {
  let width = props.windowWidth >= 769 && props.windowWidth  - 315;
  let right = props.windowWidth >= 769 ? 10 : 0;
  let height = props.windowWidth >= 769 ? 500 : 500;
  let justifyContent = props.windowWidth >= 449 ? 'center' : 'flex-start';
  let bottom = props.analyticsToggled ? (props.windowWidth >= 769 ? '150px' : '10px') : '-600px';
  let position = props.analyticsToggled ? 'fixed' : 'fixed';

  // const data = [
  //   { name: 'food', uv: 2000, pv: 2013, amt: 4500, time: 1, uvError: [100, 50], pvError: [110, 20] },
  //   { name: 'cosmetic', uv: 3300, pv: 2000, amt: 6500, time: 2, uvError: 120, pvError: 50 },
  //   { name: 'storage', uv: 3200, pv: 1398, amt: 5000, time: 3, uvError: [120, 80], pvError: [200, 100] },
  //   { name: 'digital', uv: 2800, pv: 2800, amt: 4000, time: 4, uvError: 100, pvError: 30 },
  // ];

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
        <div style={{flex: 1}}>
          Carbon Dioxide reduction:
        </div>
        <div style={{flex: 1}}>
          Carbon Monoxide reduction:
        </div>
        <div style={{flex: 1}}>
          Yearly Gas Savings:
        </div>
      </div>
    </Paper>
  );
}

export default windowSize(AnalyticsPopover);

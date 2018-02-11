import React from 'react';
import Paper from 'material-ui/Paper';
import windowSize from 'react-window-size';
import Bus from 'material-ui/svg-icons/maps/directions-bus';
import Explore from 'material-ui/svg-icons/action/explore';
import Announcement from 'material-ui/svg-icons/action/announcement';
import Expected from 'material-ui/svg-icons/maps/add-location';
import Cloud from 'material-ui/svg-icons/file/cloud';
import Gas from 'material-ui/svg-icons/maps/local-gas-station';
import Stop from 'material-ui/svg-icons/av/stop';
import style from './style.js';
import GlobalStyle from '../../style.js';

const DataPopover = (props) => {
  let width = props.windowWidth >= 769 && props.windowWidth  - 315;
  let right = props.windowWidth >= 769 ? 10 : 0;
  let height = props.windowWidth >= 769 ? 100 : 500;
  let justifyContent = props.windowWidth >= 449 ? 'center' : 'flex-start';
  let bottom = props.popOverToggled ? '10px' : '-600px';
  let position = props.windowWidth >= 769 ? 'fixed' : 'fixed';
  const temp = props.predictions && props.predictions[0];
  const precisionRound = (number, precision) => {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  };
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
        display: props.vehicleId === '' ? 'none' : 'flex',
      }}
    >
      <div style={style.dataSetStyle}>
        <div style={{...style.dataStyle, justifyContent}}>
          <Bus style={style.iconStyle} color={GlobalStyle.iconColor} />
          <strong style={style.strongStyle}> ID: </strong> <em style={{ color: GlobalStyle.emColor}}> {props.vehicleId} </em>
        </div>
        <div style={{...style.dataStyle, justifyContent}}>
          <Announcement style={style.iconStyle} color={GlobalStyle.iconColor} />
          <strong style={style.strongStyle}> Status: </strong> <em style={{ color: GlobalStyle.emColor}}> {props.eventStatus} </em>
        </div>
        <div style={{...style.dataStyle, justifyContent}}>
          <Explore style={style.iconStyle} color={GlobalStyle.iconColor} />
          <strong style={style.strongStyle}> Traveled: </strong> <em style={{ color: GlobalStyle.emColor}}> {props.milesTraveled} </em>
        </div>
        <div style={{...style.dataStyle, justifyContent}}>
          <Gas style={style.iconStyle} color={GlobalStyle.iconColor} />
          <strong style={style.strongStyle}> Fuel: </strong> <em style={{ color: GlobalStyle.emColor}}> ${props.predictions &&  precisionRound(props.predictions[0].summation * 1.91 * 261, 2) } </em>
        </div>
        <div style={{...style.dataStyle, justifyContent}}>
          <Cloud style={style.iconStyle} color={GlobalStyle.iconColor} />
          <strong style={style.strongStyle}> CO2 Em: </strong> <em style={{ color: GlobalStyle.emColor}}> {props.predictions &&  precisionRound((((90034 / 261) / 320) * props.predictions[0].summation) * 261, 2) } g/ton </em>
        </div>
      </div>
    </Paper>
  );
}

export default windowSize(DataPopover);

import React from 'react';
import Paper from 'material-ui/Paper';
import windowSize from 'react-window-size';
import Bus from 'material-ui/svg-icons/maps/directions-bus';
import Explore from 'material-ui/svg-icons/action/explore';
import Announcement from 'material-ui/svg-icons/action/announcement';
import Expected from 'material-ui/svg-icons/maps/add-location';
import Stop from 'material-ui/svg-icons/av/stop';
import style from './style.js';
import GlobalStyle from '../../style.js';

const DataPopover = (props) => {
  let paperWidth = props.windowWidth >= 769 && props.windowWidth  - 315;
  let right = props.windowWidth >= 769 ? 10 : 0;
  let height = props.windowWidth >= 769 ? 100 : 500;
  let justifyContent = props.windowWidth >= 449 ? 'center' : 'flex-start';
  return (
    <Paper
      className="paper"
      style={{
        ...style.paperStyle,
        width: paperWidth,
        height,
        right
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
          <Expected style={style.iconStyle} color={GlobalStyle.iconColor} />
          <strong style={style.strongStyle}> Expected: </strong> <em style={{ color: GlobalStyle.emColor}}> {props.expectedTime} </em>
        </div>
        <div style={{...style.dataStyle, justifyContent}}>
          <Stop style={style.iconStyle} color={GlobalStyle.iconColor} />
          <strong style={style.strongStyle}> Idle Time: </strong> <em style={{ color: GlobalStyle.emColor}}> {props.idleTime} </em>
        </div>
      </div>
    </Paper>
  );
}

export default windowSize(DataPopover);

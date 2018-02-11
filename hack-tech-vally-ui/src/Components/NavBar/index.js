import React from 'react';
import Paper from 'material-ui/Paper';
import Plus from 'material-ui/svg-icons/content/add';
import Person from 'material-ui/svg-icons/social/person';
import Menu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import windowSize from 'react-window-size';
import style from './style.js';
import GlobalStyle from '../../style.js';

const NavBar = (props) => {

  let paperWidth = props.windowWidth <= 768 ? props.windowWidth - 40 : 385;
  const { fontColor, busColor, iconColor, themeColor } = GlobalStyle;

  return (
    <Paper
      className="paper"
      style={{...style.paperStyle, width: paperWidth, left: props.windowWidth <= 768 ? 0 : 300}}
    >
      <div style={style.dataSetStyle}>
        <div style={style.dataSetStyle}>
          <IconButton>
            <Plus color={"black"} style={{height: 50, width: 50, paddingTop: 5}} />
          </IconButton>
        </div>
        <div style={style.dataSetStyle}>
          <IconButton>
            <Person color={"black"} style={{height: 50, width: 50, paddingTop: 5}} />
          </IconButton>
        </div>
        <div style={style.dataSetStyle}>
          <IconButton>
            <Menu color={"black"} style={{height: 50, width: 50, paddingTop: 5}} />
          </IconButton>
        </div>
      </div>
    </Paper>
  );
}

export default windowSize(NavBar);

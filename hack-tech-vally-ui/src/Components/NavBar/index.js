import React from 'react';
import Paper from 'material-ui/Paper';
import Plus from 'material-ui/svg-icons/content/add';
import Person from 'material-ui/svg-icons/social/person';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Social from 'material-ui/svg-icons/social/poll';
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
      style={{...style.paperStyle, width: paperWidth, right: props.windowWidth <= 767 ? 0 : 10}}    >
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
          <IconButton onClick={() => props.popOverHandler()}>
            <Social color={"black"} style={{height: 50, width: 50, paddingTop: 5}} />
          </IconButton>
        </div>
        <div style={style.dataSetStyle}>
          <IconButton onClick={() => props.toggleHandler()}>
            <Menu color={"black"} style={{height: 50, width: 50, paddingTop: 5}} />
          </IconButton>
        </div>
      </div>
    </Paper>
  );
}

NavBar.propTypes = {

}

export default windowSize(NavBar);

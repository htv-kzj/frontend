import React from 'react';
import Paper from 'material-ui/Paper';
import Plus from 'material-ui/svg-icons/content/add';
import Person from 'material-ui/svg-icons/social/person';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Popover from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import Social from 'material-ui/svg-icons/social/poll';
import Graph from 'material-ui/svg-icons/editor/format-list-bulleted';
import IconButton from 'material-ui/IconButton';
import windowSize from 'react-window-size';
import style from './style.js';
import GlobalStyle from '../../style.js';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      anchorEl: "",
    }
  }

  handleClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.props.graphPopHandler();
    this.setState({
      anchorEl: event.currentTarget,
    });
    console.log('Hey: ' + this.state.anchorEl);
  };

  render() {
    let paperWidth = this.props.windowWidth <= 768 ? this.props.windowWidth - 40 : 385;
    const { fontColor, busColor, iconColor, themeColor } = GlobalStyle;
    return (
      <Paper
        className="paper"
        style={{...style.paperStyle, width: paperWidth, right: this.props.windowWidth <= 767 ? 0 : 10}}    >
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
            <IconButton onClick={() => this.props.tableHandler()}>
              <Graph color={"black"} style={{height: 50, width: 50, paddingTop: 5}} />
            </IconButton>
          </div>
          <div style={style.dataSetStyle}>
            <IconButton onClick={() => this.handleClick}>
              <Social color={"black"} style={{height: 50, width: 50, paddingTop: 5}} />
              <Popover
                open={this.props.graphPopToggled}
                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                onRequestClose={this.props.graphPopHandler}
              >
                <Menu>
                  <MenuItem primaryText="Vehicle Table" onClick={() => this.props.tableHandler}/>
                  <MenuItem primaryText="Data Bar" onClick={() => this.props.popOverHandler}/>
                </Menu>
              </Popover>
            </IconButton>
          </div>
          <div style={style.dataSetStyle}>
            <IconButton onClick={() => this.props.toggleHandler()}>
              <Menu color={"black"} style={{height: 50, width: 50, paddingTop: 5}} />
            </IconButton>
          </div>
        </div>
      </Paper>
    );
  }
}

NavBar.propTypes = {

}

export default windowSize(NavBar);

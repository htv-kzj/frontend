import GlobalStyle from '../../style.js';

const { fontColor, busColor, iconColor, themeColor } = GlobalStyle;

const Style = {
  headerStyle: {
    backgroundColor: themeColor,
    paddingTop: 50,
    paddingBottom: 50,
    alignItems: 'center',
  },
  busStyle: {
    height: 50,
    width: 50,
    paddingTop: 5,
  },
  titleStyle: {
    color: "white",
    textAlign: 'center',
  }
}

export default Style;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  gussall_bg: {
    marginTop:20,
    width: "100%",
    height: "100%",
    backgroundColor: "#8691b6",
    // justifyContent: "center",
    // alignItems: "center",
  },

  title_border: {
    height: 80,
    width: "95%",
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    left:10,
    backgroundColor: "#3d455e",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 4,
    shadowOpacity: 1
  },

  guessall: {
    width: 278,
    textAlignVertical:"center",
    height: 60,
    fontSize: 36,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#ffffff",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4
    },
    textShadowRadius: 4
  },

  guessall2: {
    width: 100,
    textAlignVertical:"center",
    height: "100%",
    fontSize: 70,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#ffffff",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4
    },
    textShadowRadius: 4
  },
  attempbar_top: {
    width: "95%",
    height: 92.4,
    alignContent:"center",
    borderRadius: 30,
    backgroundColor: "#c1ccf1",

  },

  attempbar_bottom: {
    width: 200,
    height: 35,
    borderRadius:50,
    // borderBottomLeftRadius:30,
    // borderBottomRightRadius:30,
    // borderTopLeftRadius:0,
    
    backgroundColor: "#c1ccf1"
  },
  yourLastAttempt: {
    width: 111,
    height: 14,
    fontSize: 12,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#3d455e"
  },

  correntPlacesCorrentLogos: {
    width: "100%",
    height: 20,
    fontSize: 11,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#3d455e"
  },

  incorrectPlacesCorrentLogos: {
    width: "100%",
    height: 20,
    fontSize: 11,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#3d455e"
  },

  hintbox: {
    width:70,
    height: 20,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 4,
    shadowOpacity: 1
  },

  greendot: {
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: "#17cd29"
  },

  reddot: {
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: "#ff0000"
  },

  attempbox: {
    width: 150,
    height: 42,
    borderRadius: 20,
    backgroundColor: "#c1ccf1",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 4,
    shadowOpacity: 1
  },
  attempbox_text: {
    width: 44,
    height: 50,
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#000000"
  },

  attempbox_icon: {
    width: 33,
    height: 33
  },

  playbox: {
    width: 370,
    height: 333,
    marginTop:50,
    borderRadius: 50,
    backgroundColor: "#c1ccf1"
  },

  guessIcon: {
    width: 127,
    height: 123,
    backgroundColor: 'white', 
    borderRadius:20,

  },

  btncheck: {
    width: 311,
    height: 75,
    borderRadius: 50,
    backgroundColor: "#4971ff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 4,
    shadowOpacity: 1
  },

  checkText: {
    width: 181,
    height: 47,
    fontSize: 48,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#ffffff",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4
    },
    textShadowRadius: 4
  },

  winBox: {
    width: 311,
    height: 350,
    borderRadius: 50,
    backgroundColor: "#0bd22b"
  },

  startBox: {
    width: 311,
    height: 350,
    borderRadius: 50,
    backgroundColor: "#3d455e",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 4,
    shadowOpacity: 1
    
  },

  loseBox: {
    width: 311,
    height: 350,
    borderRadius: 50,
    backgroundColor: "red"
  }
});

export default styles;



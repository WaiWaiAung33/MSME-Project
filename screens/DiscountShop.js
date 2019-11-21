import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image
} from "react-native";
import * as Font from "expo-font";

export default class DiscountShop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: true
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      "Dosis-Light": require("../assets/font/Dosis-ExtraLight.otf")
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <View style={styles.container}>
          <ImageBackground
            style={styles.backgroundImage}
            source={require("../assets/green.png")}
          >
            <View style={styles.logoContainer}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../assets/msmelogo.png")}
                  style={{ width: 50, height: 50 }}
                />

                <Text style={styles.logoText}>WELCOME from MSME</Text>
              </View>

              <View style={styles.touch}>
                <TouchableOpacity>
                  <View style={styles.first}>
                    <View>
                      <Image
                        source={require("../assets/member.png")}
                        style={styles.image}
                      />
                    </View>
                    <View>
                      <Text style={styles.text}>MEMBERS</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.touch}>
                <TouchableOpacity>
                  <View style={styles.first}>
                    <View>
                      <Image
                        source={require("../assets/discount1.png")}
                        style={styles.image}
                      />
                    </View>
                    <View>
                      <Text style={styles.text}>DISCOUNT SHOP</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.touch}>
                <TouchableOpacity>
                  <View style={styles.first}>
                    <View>
                      <Image
                        source={require("../assets/executive1.png")}
                        style={styles.image}
                      />
                    </View>
                    <View>
                      <Text style={styles.text}>EXECUTIVE COUNCIL</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.touch}>
                <TouchableOpacity>
                  <View style={styles.first}>
                    <View>
                      <Image
                        source={require("../assets/boss.png")}
                        style={styles.image}
                      />
                    </View>
                    <View>
                      <Text style={styles.text}>COMMITTEE</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      );
    } else {
      return (
        <View>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  logoContainer: {
    height: 400,
    flexDirection: "column"
  },
  logoText: {
    fontSize: 20,

    color: "yellow",
    marginLeft: 20,
    textAlignVertical: "center",

    fontWeight: "400"
  },
  text: {
    padding: 20,
    color: "#F0070E",

    marginLeft: 25,

    fontSize: 15
  },
  image: {
    width: 60,
    height: 60
  },
  first: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 20
  },
  touch: {
    borderStyle: "solid",
    width: 320,
    height: 80,
    marginTop: 15,
    borderRightColor: "#F0C507",
   borderRightWidth:1,
    borderLeftWidth:1,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderTopRightRadius:2,
    borderTopLeftRadius:2,
    borderBottomEndRadius:2,
    borderBottomStartRadius:2,
    borderLeftColor:"#F07807",
    borderTopColor:"#F0E907",
    borderBottomColor:"#F09807"

  
    
  }
});

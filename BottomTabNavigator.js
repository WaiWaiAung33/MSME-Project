import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import DiscountShop from "./screens/DiscountShop";
import AboutUs from "./screens/AboutUs";
import News from "./screens/News";
import Setting from "./screens/Setting";
import React from "react";


import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";

export default createAppContainer(
  createBottomTabNavigator(
    {
      DiscountShop: {
        screen: DiscountShop,
        navigationOptions: () => ({
          title: "DiscountShop",

          tabBarIcon: ({ focused, tintColor }) => (
            <Entypo name="shop" size={25} color={tintColor} />
          )
        })
      },
      AboutUs: {
        screen: AboutUs,
        navigationOptions: () => ({
          title: "AboutUs",

          tabBarIcon: ({ focused, tintColor }) => (
            <AntDesign name="woman" size={25} color={tintColor}></AntDesign>
          )
        })
      },
      News: {
        screen: News,
        navigationOptions: () => ({
          title: "News",
          tabBarIcon: ({ focused, tintColor }) => (
            <Entypo name="news" size={25} color={tintColor} />
          )
        })
      },
      Setting: {
        screen: Setting,
        navigationOptions: () => ({
          title: "Setting",
          tabBarIcon: ({ focused, tintColor }) => (
            <Ionicons name="md-settings" size={25} color={tintColor} />
          )
        })
      }
    },

    {
      initialRouteName: "DiscountShop",
      tabBarOptions: {
        activeTintColor: "black",
        inactiveTintColor: "white",

        style: {
          height: 60,
          backgroundColor: "green"
        }
      }
    }
  )
);

import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import {} from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Color";

const PopUpMenu = () => {
  return (
    <View >
      <Menu style={{ position: "relative" }}>
        <MenuTrigger>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={24}
            color={Colors.secondary}
          />
        </MenuTrigger>
        <MenuOptions
          customStyles={{
            optionsContainer: styles.optionContainer,
            optionText: styles.menuOptions,
          }}
        >
          <MenuOption style={styles.menuOptions} text="New Group" />
          <MenuOption style={styles.menuOptions} text="New Broadcast" />
          <MenuOption style={styles.menuOptions} text="Whatsapp Web" />
          <MenuOption style={styles.menuOptions} text="Starred Messages" />
          <MenuOption style={styles.menuOptions} text="Settings" />
        </MenuOptions>
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  menuOptions: {
    fontSize: 17,
    padding: 7
  },
  optionContainer: {
    marginTop: -10,
  },
});

// const styles = StyleSheet.create({
// container:{
//   zIndex: 5
// }
// });
// const ICON_SIZE = 24;

// // export default class PopUpMenu extends React.Component {

// // static propTypes = {
// //     actions: PropTypes.arrayOf(PropTypes.string).isRequired,
// //     onPress: PropTypes.func.isRequired
// // }

// // constructor(props){
// //     super(props);
// //     this.state = {
// //         icon: null
// //     }
// // }

// //   render() {
// //     return <View></View>;
// //   }
// // }

export default PopUpMenu;

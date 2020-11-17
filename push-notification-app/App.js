import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

//handler the notification on the foreground while the app is running
Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
    };
  },
});

export default function App() {

const [pushToken, setPushToken] = useState();

  // Permissions needed for iOS app
  useEffect(() => {
    Permissions.getAsync(Permissions.NOTIFICATIONS)
      .then((res) => {
        if (res.status !== "granted") {
          return Permissions.askAsync(Permissions.NOTIFICATIONS);
        }
        return res;
      })
      .then((res) => {
        if (res.status !== "granted") {
          throw new Error("Permissions are required!");
        }
      })
      .then(() => {
       // push notification token can't be obtained on emulators
        return Notifications.getExpoPushTokenAsync();
      })
      .then((response) => {
       const pushNotificationToken = response.data;
       setPushToken(pushNotificationToken);
      })
      // .catch(err => {
      //   console.log(err)
      //   throw null;
      // });
  }, []);

  useEffect(() => {
    // addNotificationResponseReceivedListener  // This listener is fired whenever a notification is received while the app is foregrounded
    const backgroundSubscription = Notifications.addNotificationResponseReceivedListener(
      (notification) => {
        console.log(notification);
      }
    );

    // addNotificationReceivedListener // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    const foregroundSubscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log(notification);
      }
    );
    return () => {
      foregroundSubscription.remove();
      backgroundSubscription.remove();
    };
  }, []);

  //Android don't need extra permissions however app.json should be updated with useNextNotificationApi key under android
  const TriggerNotificationHandler = () => {

    // for push notifications within the same app installed on different devicess.
    fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-Encoding': 'gzip, deflate',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: pushToken,
        data : {extractData: 'some meta data'},
        title: 'You have received an order',
        body: 'The order has been placed by Muhammad Karim, tab to see the details'
      })
    });


    // scheduled notification on the background
    // Notifications.scheduleNotificationAsync({
    //   content: {
    //     title: "You have received an order",
    //     body: "Muhammad Irfan has places an order, view your order",
    //   },
    //   trigger: {
    //     seconds: 10,
    //   },
    // });
  };

  return (
    <View style={styles.container}>
      <Button
        title="Send Notification"
        onPress={TriggerNotificationHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

function showNotification() {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notifications");
    return;
  }

  Notification.requestPermission().then(function (permission) {
    if (permission === "granted") {
      console.log("Permission is granted. Creating notification...");
      console.log("Current Notification Permission: ", Notification.permission); // double check permission right before notification call
      try {
        let optionalNote = {
          body: `Unit BB8 being dispatched to Event P10108\nClick this message or the Close button to acknowledges.`,
          requireInteraction: true,
          icon: "https://oncall-dev-app1.hexagonsi.com:44343/2509.0/oncall/favicon.ico",
        };

        let myNote = new Notification("OnCall Mobile Unit", optionalNote);
        myNote.onclick = () => {
          console.log("Clicked the message");
          window.focus();
          if (window.client && typeof window.client.focus === "function") {
            window.client.focus();
          }
          confirm("Notification clicked!");
        };
        myNote.onclose = () => {
          console.log("Clicked the close button");
        };
      } catch (error) {
        console.error("Error creating notification:", error); // Catch any errors during notification creation
      }
    } else {
      console.log("Permission was not granted.");
    }
  });
}
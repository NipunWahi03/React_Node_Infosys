const Event_Emitter = require("events");

const event_object = new Event_Emitter();
event_object.on("response", () => {
  console.log("Hello the event has been triggered.");
});

event_object.emit("response");

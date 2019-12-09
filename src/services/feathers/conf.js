import io from "socket.io-client";
import feathers from "@feathersjs/feathers";
import auth from "@feathersjs/authentication-client";
import socketio from "@feathersjs/socketio-client";
import feathersRest from "@feathersjs/rest-client";

const URL = "wss://api.cityprime.club";
export const socket = io(URL, {
  //forceNew: true
  transports: ["websocket"]
});

export const app = feathers();
export const rest = feathers();

app.configure(socketio(socket));
app.configure(
  auth({
    storage: localStorage,
    jwtStrategy: "jwt",
    storageKey: "feathers-jwt"
  })
);

app.timeout = 10000;

rest.configure(feathersRest(URL).fetch(fetch));
rest.configure(
  auth({
    storage: localStorage
  })
);

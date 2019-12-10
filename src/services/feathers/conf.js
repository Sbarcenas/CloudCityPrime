import io from "socket.io-client";
import feathers from "@feathersjs/feathers";
import auth from "@feathersjs/authentication-client";
import socketio from "@feathersjs/socketio-client";
import feathersRest from "@feathersjs/rest-client";

const URL = "https://api.cityprime.club";
export const socket = io(URL, {
  //forceNew: true
  transports: ["websocket"]
});

//export const app = feathers();
export const rest = feathers();

//app.configure(socketio(socket));
rest.configure(
  auth({
    storage: localStorage,
    jwtStrategy: "jwt",
    storageKey: "feathers-jwt"
  })
);

//rest.timeout = 10000;

rest.configure(feathersRest(URL).fetch(fetch));
/*rest.configure(
  auth({
    storage: localStorage
  })
);*/

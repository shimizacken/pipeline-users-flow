import JSONFormatter from "json-formatter-js";
import { loadUsers } from "./users";
import { jsonFormmaterConfig } from "./jsonFormmaterConfig";
import "./styles.css";

document.getElementById("app").innerHTML = "loading users...";

loadUsers().then(users => {
  const formatter = new JSONFormatter(users, 3, jsonFormmaterConfig);
  document.getElementById("app").innerHTML = "";
  document.getElementById("app").appendChild(formatter.render());
});

import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://keycloak:8081/auth",
  realm: "moneymaker",
  clientId: "moneymaker-react-client",
});

export default keycloak;
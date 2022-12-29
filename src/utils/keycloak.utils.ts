import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8081/auth",
  realm: "moneymaker",
  clientId: "moneymaker-react-client",
})

export default keycloak;
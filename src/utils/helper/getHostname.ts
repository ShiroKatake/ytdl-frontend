import { processEnv } from "./processEnv";

export const getHostname = () => {
  const environments = ["LOCAL", "TEST", "PROD"];

  for (const environment of environments) {
    if (window.location.hostname === processEnv(`REACT_APP_FE_HOSTNAME_${environment}`)) {
      return processEnv(`REACT_APP_BE_HOSTNAME_${environment}`);
    }
  }

  throw Error("Hostname not supported.");
}

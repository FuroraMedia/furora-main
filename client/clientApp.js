// @flow
import React from "react";
import { hydrate } from "react-dom";

import App from "./main";

hydrate(<App />, document.getElementById("app"));

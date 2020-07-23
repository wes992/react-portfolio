import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./index.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUser, faTasks, faToolbox, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faUser, faTasks, faToolbox, faPaperPlane);

ReactDOM.render(<App />, document.getElementById("root"));

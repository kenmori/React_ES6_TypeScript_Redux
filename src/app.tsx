/// <reference path="../typings/tsd.d.ts" />
/// <reference path="redux.d.ts" />

import * as React from "react";
import * as ReactDOM  from "react-dom";
import * as Components from "./components";
import * as Model from "./model";
import {createStore} from "redux";
import * as Mousetrap from "mousetrap";

function reducer(state = new Model.Hello(()=>{}), action) {
  function() {};

}

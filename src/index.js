//! **`` This "body" import is needed even though it's saying it's not being read.
import { body } from './modules/dom-manipulation';

import { lookForOuterNavClass } from './modules/event-handlers';

import './normalize.css';
import './style.css';

//todo **`` Need to figure out the animations without normalize.css
//todo **`` Write a better README

lookForOuterNavClass();

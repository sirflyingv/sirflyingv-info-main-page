import elementColorFlicker from '/elementColorFlicker.js';
import { INTERVAL } from './config.js';
import { COLOR_DELTA_MAX } from './config.js';

const list = document.querySelectorAll('.list__element');

list.forEach(e => elementColorFlicker(e, COLOR_DELTA_MAX, INTERVAL));

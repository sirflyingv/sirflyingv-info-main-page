import elementColorFlicker from '/elementColorFlicker.js';
import { COLOR_DELTA_MAX, INTERVAL } from './config.js';

const list = document.querySelectorAll('.list__element');

list.forEach(e => elementColorFlicker(e, COLOR_DELTA_MAX, INTERVAL));

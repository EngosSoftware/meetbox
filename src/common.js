/*
 * Copyright (c) 2017-2021 Dariusz Depta Engos Software
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {logger} from "./logger.js";
const {v4: uuidv4} = require('uuid');

/**
 * Common module.
 */
export const common = (function () {

  /**
   * Flag indicating whether this component runs on device with touch capabilities.
   */
  const touch = ('ontouchstart' in window);

  /**
   *
   * @return {*|string}
   */
  const uuid = () => {
    return uuidv4();
  }

  /**
   * Adds touch or mouse event to specified element.
   */
  const addTouch = (element, handler) => {
    if (element) {
      element.addEventListener(touch ? "touchstart" : "mousedown", handler, false);
    } else {
      logger.error('element with id `' + element + '` not found');
    }
  }

  /**
   * Adds touch or mouse event to element with specified identifier.
   */
  const addTouchById = (elementId, handler) => {
    addTouch(window.document.getElementById(elementId), handler);
  }

  return {
    uuid: uuid,
    addTouch:addTouch,
    addTouchById:addTouchById
  }
})();

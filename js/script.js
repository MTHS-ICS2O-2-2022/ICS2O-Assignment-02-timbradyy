// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Tim Brady
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate() {
  // input
  const base = parseInt(document.getElementById("base-of-parallelogram").value)
  const height = parseInt(document.getElementById("height-of-parallelogram").value)

  // process
  const area = (base * height)

  // output
  document.getElementById("area").innerHTML = "Area of parallelogram is: " + area + " cm²"
}

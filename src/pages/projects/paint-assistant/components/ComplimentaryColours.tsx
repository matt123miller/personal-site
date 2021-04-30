/// <reference path='../types.d.ts' />

import React, { useState, Fragment } from 'react';

import Paint from './Paint';
import paintData from '../data';

type Props = {
  chosenColour: string
}

export default function ComplimentaryColours(props: Props) {
  const { chosenColour } = props;

  // set to the opposite of our chosen colour
  const colourAsRgb = hexToRgb(chosenColour.slice(1));

  const { r, g, b } = findComplimentaryColour(colourAsRgb);
  const complimentaryColour = rgbToHex(r, g, b);

  const { chosenPaint, complimentaryPaint } = findPaintsByHex(chosenColour, complimentaryColour, paintData);

  return (
    <div className="complimentary-colour-container">
      {chosenPaint}
      <ColourGradient chosenColour={chosenColour} complimentaryColour={complimentaryColour} />
      {complimentaryPaint}
    </div>
  );
}

function ColourGradient(chosenColour, complimentaryColour) {
  const swatchStyles = {
    background: `linear-gradient(90deg, ${chosenColour} 0%, ${chosenColour} 40%, ${complimentaryColour} 60%)`
  };
  return <div className="colour-swatch" style={swatchStyles}></div>;
}

function findPaintsByHex(chosenHex, complimentaryHex, paints) {
  const foundPaint = paints.find((p) => p.hexCode === chosenHex) ?? null;

  // we have the comphex
  // find the colour with the closest hex value from paints
  const compRGB = hexToRgb(complimentaryHex.slice(1));

  // have { r, g, b } and an array of objects with paint.rgb = { r, g, b }

  // start with the closest red colour
  let nearestRed = 255; // or 0?
  const compR = compRGB.r;

  paints.forEach((p) => {
    const redDiff = Math.abs(p.rgb.r - compR);
    if (redDiff < nearestRed) {
      nearestRed = p.rgb.r;
    }
    console.log(nearestRed);
  });

  const chosenPaint = <Paint className="chosen" paint={foundPaint} onPaintClick={() => {}} />;
  const complimentaryPaint = <Paint className="chosen" paint={foundPaint} onPaintClick={() => {}} />;

  return {
    chosenPaint,
    complimentaryPaint
  };
}

/**
 *
 * @param {String} a
 * @param {String} b
 * @returns
 */
function compareColour(a, b) {
  if (b.length == 6) {
    var red = Math.abs(parseInt(a.substr(0, 2), 16) - parseInt(b.substr(0, 2), 16));
    var green = Math.abs(parseInt(a.substr(2, 2), 16) - parseInt(b.substr(2, 2), 16));
    var blue = Math.abs(parseInt(a.substr(4, 2), 16) - parseInt(b.substr(4, 2), 16));
    return red + green + blue;
  } else {
    return 9999;
  }
}

/**
 *
 * @param {Object} rgb
 * @param {Number} rgb.r
 * @param {Number} rgb.g
 * @param {Number} rgb.b
 */
function findComplimentaryColour({ r, g, b }) {
  return {
    r: 255 - r,
    g: 255 - g,
    b: 255 - b
  };
}

function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.padStart(2, '0');
}

function hexToRgb(hex) {
  return {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4), 16)
  };
}

/// <reference path='./types.d.ts' />

import React, { useState } from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

import PaintsList from './components/PaintsList';
import paintData from './data';

import './Paint.css';

export default function PaintMixer() {
  return (
    <Layout>
      <SEO title="About Me" />
      <main>
        <h1>Painting Colour Assistant</h1>
        <PaintsList paintData={paintData} />
      </main>
    </Layout>
  );
}

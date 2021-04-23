import React, { useState } from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

import { ColourPicker, PaintsList, ComplimentaryColours } from './components';
import paintData from './data';

import './App.css';


export default function PaintMixer() {


    const [chosenColour, setColour] = useState('#000000');

    return (
      <Layout>
        <SEO title="About Me" />
            <header>
                <h1>Painting Colour Assistant</h1>
                {/* <ColourPicker chosenColour={chosenColour} setColour={setColour} /> */}
                <div className="colour-details-container m3">
                    {/* <ComplimentaryColours  className="centre" chosenColour={chosenColour} /> */}
                </div>
            </header>
            <hr />
            <main>
                <PaintsList paintData={paintData} onPaintClick={setColour} />
            </main>

      </Layout>
    );
}



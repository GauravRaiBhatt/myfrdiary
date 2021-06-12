import React from 'react';
import Tile from "./Tile";
import './styling/middle.css';
import { useSelector } from 'react-redux';

function Middle() {
  const recepientData = useSelector(state => state.data.recepientData);

    return (
        <div id="Middle">
          {recepientData.map((doc) => (
            <Tile
              key={doc.recepientId}
              name={doc.recepientName}
              total={doc.total}
              lastModified={doc.lastModified}
              gain={doc.gain}
            />
          ))}
         
        </div>
    )
}

export default Middle

import React from 'react';

import GiphysIndexItem from './giphys_index_item';

const GiphysIndex = props => (
  <div className="giphys-list">
    <h1>Giphys</h1>
    <ul>
      <GiphysIndexItem />
    </ul>
  </div>
);

export default GiphysIndex;
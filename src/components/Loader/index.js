import React, { Component } from 'react';
import loaderSrc from '../../assets/loading.gif';

const Loader = props => (
  <div>
  <img
    style={{ width: 65 }}
    alt="loader icon"
    src = {loaderSrc} />
  </div>
);

export default Loader;

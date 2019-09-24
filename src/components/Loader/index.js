import React, { Component } from 'react';
import loaderSrc from '../../assets/loading.gif';

const Loader = props => (
  <div>
  <img
    alt="loader icon"
    src = {loaderSrc} />
  </div>
);

export default Loader;

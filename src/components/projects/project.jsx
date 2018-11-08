import React from 'react';
import {
  string, arrayOf, shape, number,
} from 'prop-types';
import { Even } from './even';
import { Odd } from './odd';

export const Project = ({ data }) => {
  if (data.id % 2) {
    return <Even data={data} />;
  }
  return <Odd data={data} />;
};

Project.propTypes = {
  data: shape({
    id: number.isRequired,
    img: string.isRequired,
    title: string.isRequired,
    url: string,
    git: string.isRequired,
    desc: string.isRequired,
    tags: arrayOf(string).isRequired,
  }).isRequired,
};

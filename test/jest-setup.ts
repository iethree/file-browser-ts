// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
dotenv.config({
  path: '../.env.local',
});
import React from 'react';
import { jest } from '@jest/globals';
import jestmock from 'jest-mock';

global.jest = jest;
global.jest.fn = jestmock.fn;
global.React = React;

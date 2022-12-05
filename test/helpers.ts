import { act, render } from '@testing-library/react';
import React from 'react';

export const renderAsync = async (El: React.ReactElement) =>
  act(async () => {
    render(El);
  });

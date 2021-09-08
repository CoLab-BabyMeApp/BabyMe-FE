import React from 'react';
import { cleanup } from '@testing-library/react';
import App from './App';
import { getAllDaycares } from './services/daycaresApi';

// jest.mock('../services/daycaresApi.js');

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders a list of daycares', () => {
    getAllDaycares.mockResolvedValue([
      {
        id: '1',
        name: 'Weinacker\'s Montessori School',
        street_address: '227 Hillcrest Road',
        city: 'Mobile',
        state: 'AL',
        zip_code: '36608',
        image: 'https://www.weinackersmontessori.com/wp-content/uploads/2019/09/Preschool-Circle-Time.png',
        phone_number: '251-344-8755',
        day: true,
        evening: true,
        infant: true,
        toddler: true,
        child: true,
        older_child: false,
        snacks: true,
        covid_plan: true,
        price: '$$$',
        coordinates: [
          '-88.190180',
          '30.685370'
        ]
      },
    ]);
  });
});

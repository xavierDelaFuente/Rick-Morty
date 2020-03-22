import React from 'react';
// import { ApolloProvider } from 'react-apollo';
import { MockedProvider } from '@apollo/react-testing';
import { create } from 'react-test-renderer';
// import wait from 'waait';
// import client from '../client';
import CharactersQuery from '../components/Characters';
import charactersJson from './__mocks__/Characters.json';
import GET_CHARACTERS_QUERY from '../querys/characters';

const mocks = [
  {
    request: {
      query: GET_CHARACTERS_QUERY,
    },
    result: {
      charactersJson,
    },
  },
];

// let component;
// beforeEach(() => {
//     console.log(charactersJson)
//     component = create(
//         <MockedProvider mocks={charactersJson} addTypename={false}>
//           <CharactersQuery />
//         </MockedProvider>,
//       );
// })

// eslint-disable-next-line no-undef
it('renders without error', () => {
  create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <CharactersQuery />
    </MockedProvider>,
  );
});

// it('renders loading initaly while there is no data', () => {
//     const tree = component.toJSON();
//     expect(tree.children).toContain('Loading...');
// });

// it('renders the component when data is received', async () => {
//     await wait(0); // wait for response

//     const tree = component.toJSON();
//     console.log(component.root)
//     const p = component.root.findByType('div');
//     // const p = component.root.findByType('p');
//     expect(p.children).toContain('Buck is a poodle');
// });

import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import GET_CHARACTERS_QUERY from '../querys/characters';

const Row = ({ label, value }) => (
  <div style={{ display: 'flex', justifyContent: 'spaceBetween' }}>
    <p>{`${label} : `}</p>
    <p>{value}</p>
  </div>
);

Row.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

const CharactersQuery = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>There was a problem getting the information!</p>;

  return data.characters.results.map((character) => {
    const {
      id,
      image,
      name,
      status,
      species,
      gender,
      origin: { name: originName },
      location: { name: locationName },
      created,
    } = character;
    return (
      <div
        key={id}
        style={{ display: 'flex', flexDirection: 'column' }}
        data-testid="character"
      >
        <img src={image} alt="" />
        <Row label="Name" value={name} />
        <Row label="Satus" value={status} />
        <Row label="Species" value={species} />
        <Row label="Gender" value={gender} />
        <Row label="Origin" value={originName} />
        <Row label="Location" value={locationName} />
        <Row label="Created" value={created} />
      </div>
    );
  });
};

export default CharactersQuery;

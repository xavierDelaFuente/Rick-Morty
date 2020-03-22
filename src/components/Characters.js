import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const Row = ({ label, value }) => {
  return (
    <div style={{ display: "flex", justifyContent: "spaceBetween" }}>
      <p>{`${label} : `}</p>
      <p>{value}</p>
    </div>
  );
};

const CharactersQuery = () => {
  return (
    <Query
      style={{ display: "flex" }}
      query={gql`
        {
          characters {
            results {
              id
              name
              status
              species
              gender
              origin {
                name
              }
              image
              location {
                name
              }
              created
            }
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>There was a problem getting the information!</p>;

        return data.characters.results.map(character => {
          const {
            id,
            image,
            name,
            status,
            species,
            gender,
            origin: { name: originName },
            location: { name: locationName },
            created
          } = character;
          return (
            <div key={id} style={{ display: "flex", flexDirection: "column" }}>
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
      }}
    </Query>
  );
};

export default CharactersQuery;

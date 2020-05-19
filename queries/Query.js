import gql from 'graphql-tag';

const add_Champ = gql`
  mutation create(
    $name: String!
    $id: ID!
    $damagetype: String!
    $lane: String!
    $playstyle: String!
    $champimage: String!
  ) {
    addChamp(
      name: $name
      id: $id
      damagetype: $damagetype
      lane: $lane
      playstyle: $playstyle
      champimage: $champimage
    ) {
      id
      name
      damagetype
      lane
      playstyle
      champimage
    }
  }
`;

const get_Champs = gql`
  query Champ($lane: String!) {
    champs(lane: $lane) {
      id
      name
      damagetype
      lane
      playstyle
      champimage
    }
  }
`;

export {add_Champ, get_Champs};

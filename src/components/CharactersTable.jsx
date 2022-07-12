import PropTypes from 'prop-types';

const CharactersTable = ({ characters }) => {
  return <div>CharactersTable</div>;
};

CharactersTable.defaultProps = {
  characters: [],
};

CharactersTable.propTypes = {
  characters: PropTypes.array,
};

export default CharactersTable;

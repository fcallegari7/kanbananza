import { connect } from 'react-redux';
import Card from './../components/Card';

const mapStoreToProps = (state, ownProps) => {
  return { card: state.cards.entities[ownProps.cardId] };
};

export default connect(mapStoreToProps)(Card);

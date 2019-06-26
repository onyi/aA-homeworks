import { connect } from 'react-redux';
import GiphysSearch from './giphys_search';
import { fetchSearchGiphys } from '../actions/giphy_actions';


const mapStateToProps = state => {

}


const mapDispatchToProps = dispatch => {
  return ({
    fetchSearchGiphys: giphy => dispatch(fetchSearchGiphys(giphy))
  });
};

export default connect(null, mapDispatchToProps)(GiphysSearch);
import { connect } from 'react-redux';
import Home from "../Home/Home";

const mapStateToProps = (state) => {
    console.log(state);
    return state
};

export default connect(mapStateToProps)(Home);
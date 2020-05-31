import { connect } from 'react-redux';
import Home from "../Components/Home/Home";

const mapStateToProps = (state) => {
    return state.dataReducer;
};

export default connect(mapStateToProps)(Home);
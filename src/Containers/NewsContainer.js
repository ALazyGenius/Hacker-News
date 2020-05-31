import { connect } from 'react-redux';
import News from "../Components/News/News";

const mapStateToProps = (state) => {
    console.log(state);
    return state.dataReducer.api.data;
};

export default connect(mapStateToProps)(News);
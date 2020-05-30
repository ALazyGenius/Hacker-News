import { connect } from 'react-redux';
import News from "../News/News";

const mapStateToProps = (state) => {
    console.log(state);
    return state
};

export default connect(mapStateToProps)(News);
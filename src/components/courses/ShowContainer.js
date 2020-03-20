import { connect } from "react-redux";
import Show from "./Show";
import { remove } from "../../redux/actions/ActionsCourse";

const mapStateToProps = state => {
  return {
    courses: state.courses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    remove: id => dispatch(remove(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Show);

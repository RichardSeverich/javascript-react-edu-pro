import { connect } from "react-redux";
import ShowIns from "./ShowIns";
import { remove } from "../../redux/actions/ActionsUser";

const mapStateToProps = state => {
  return {
    users: state.users,
    coursesUsers: state.coursesUsers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    remove: id => dispatch(remove(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowIns);

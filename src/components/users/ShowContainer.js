import { connect } from "react-redux";
import Show from "./Show";

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(Show);

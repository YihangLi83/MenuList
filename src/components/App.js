import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import Detail from "./Detail";
import "./style.css";

class App extends React.Component {
  componentDidMount() {
    this.props.getMenu();
  }
  loadMenu = () => {
    this.props.getMenu();
  };
  handleClick = sn => {
    this.props.getDetail(sn);
    this.loadMenu();
  };
  render() {
    const { list, detail, showDetail, loading } = this.props;
    return (
      <div>
        <h2>Welcome</h2>
        <div className="page">
          <div className="categories">
            <h2>Menu</h2>
            <ul>
              {list === undefined
                ? null
                : list.map((item, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => this.handleClick(item.short_name)}
                      >
                        {`${item.name} - (${item.short_name})`}
                      </li>
                    );
                  })}
            </ul>
          </div>
          <div className="Loading">
            {loading ? (
              <div>
                <h2>Loading...</h2>
              </div>
            ) : null}
          </div>
          <div className="details">
            {showDetail ? (
              <div>
                <h2>Items</h2>
                <Detail detail={detail} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.list,
    detail: state.detail,
    showDetail: state.showDetail,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMenu: () => {
      dispatch(actions.loadMenu());
    },
    getDetail: sn => {
      dispatch(actions.loadDetail(sn));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

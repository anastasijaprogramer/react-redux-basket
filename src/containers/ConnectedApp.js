import {connect} from 'react-redux';
import App from "../App";
import {add, remove} from "../actions";

const mapStateToProps = state => ({
    productList: state.productList.productList
});

const mapDispatchToProps = dispatch => ({
    add: id => dispatch(add(id)),
    remove: id => dispatch(remove(id))
})

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
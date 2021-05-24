import { connect } from "react-redux";
import Home from "../components/Home";
import { addToCart, removeFromCart } from "../services/actions/Action";

const mapStateToProps = (state) => ({
  data: state.cardItems,
});
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),

  removeFromCartHandler: (data) => dispatch(removeFromCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

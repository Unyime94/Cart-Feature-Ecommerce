import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from './components/Modal';
// import Test from './components/Test';
import ErrorPage from "./components/ErrorPage";
import {useDispatch, useSelector} from 'react-redux';
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from 'react';

function App() {
  const { cartItems, isLoading, errorMessage } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems('random'))
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }

  if(errorMessage) {
    return (
      <ErrorPage />
    )
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
      {/* <Test /> */}
    </main>
  )
}
export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CustomerChangePassword from './pages/CustomerChangePassword';
import CustomerForgotPassword from './pages/CustomerForgotPassword';
import CustomerLogin from './pages/CustomerLogin';
import CustomerRegister from './pages/CustomerRegister';
import CustomerHome from './pages/CustomerHome';
import CustomerBasket from './pages/CustomerBasket';
import CustomerAccount from './pages/CustomerAccount';
import EmptyBasket from './pages/EmptyPages/EmptyBasket';
import NoSearchFound from './pages/EmptyPages/NoSearchFound';
import AddedtoCartDialog from './components/AddedtoCartDialog';
import Vegetables from './pages/Categories/Vegetables';
import Fruits from './pages/Categories/Fruits';
import Sale from './pages/Categories/Sale';
import FreeDelivery from './pages/Categories/FreeDelivery';
import ToPay from './pages/AccountPages/ToPay';
import ToShip from './pages/AccountPages/ToShip';
import ToReceive from './pages/AccountPages/ToReceive';
import ToReview from './pages/AccountPages/ToReview';
import ReviewForm from './pages/AccountPages/ReviewForm';
import EditCustomerInfo from './pages/AccountPages/EditCustomerInfo';
import RecentTransactions from './pages/AccountPages/RecentTransactions';
import Coupon from './pages/AccountPages/Coupon';
import Review from './pages/AccountPages/Review';
import ProductDetails from './pages/ProductPages/ProductDetails';
import ProductReviews from './pages/ProductPages/ProductReviews';
import SellerDetails from './pages/SellerPages/SellerDetails';
import SellerVegetables from './pages/SellerPages/SellerVegetables';
import SellerFruits from './pages/SellerPages/SellerFruits';
import Checkout from './pages/Checkout';
import SelectAddress from './pages/SelectAddress';
import EditAddress from './pages/EditAddress';
import AddAddress from './pages/AddAddress';
import PaymentMethod from './pages/PaymentMethod';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/customer/login' element={<CustomerLogin/>} />
        <Route path='/customer/register' element={<CustomerRegister/>} />
        <Route path='/customer/forgotpass' element={<CustomerForgotPassword/>} />
        <Route path='/customer/changepass' element={<CustomerChangePassword/>} />
        <Route path='/customer/home' element={<CustomerHome/>} />
        <Route path='/customer/home/noresult' element={<NoSearchFound/>} />
        <Route path='/vegetables' element={<Vegetables/>} />
        <Route path='/fruits' element={<Fruits/>} />
        <Route path='/sale' element={<Sale/>} />
        <Route path='/freedelivery' element={<FreeDelivery/>} />
        <Route path='/customer/addeddialog' element={<AddedtoCartDialog/>} />
        <Route path='/customer/basket' element={<CustomerBasket/>} />
        <Route path='/customer/basket/empty' element={<EmptyBasket/>} />
        <Route path='/customer/account' element={<CustomerAccount/>} />
        <Route path='/customer/editaccount' element={<EditCustomerInfo/>} />
        <Route path='/topay' element={<ToPay/>} />
        <Route path='/toship' element={<ToShip/>} />
        <Route path='/toreceive' element={<ToReceive/>} />
        <Route path='/toreview' element={<ToReview/>} />
        <Route path='/reviewing' element={<ReviewForm/>} />
        <Route path='/customer/account/recenttransactions' element={<RecentTransactions/>} />
        <Route path='/customer/account/discounts' element={<Coupon/>} />
        <Route path='/customer/account/review' element={<Review/>} />
        <Route path='/productdetails' element={<ProductDetails/>} />
        <Route path='/allreviews' element={<ProductReviews/>} />
        <Route path='/sellerdetails' element={<SellerDetails/>} />
        <Route path='/seller/vegetables' element={<SellerVegetables/>} />
        <Route path='/seller/fruits' element={<SellerFruits/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/selectaddress' element={<SelectAddress/>} />
        <Route path='/editaddress' element={<EditAddress/>} />
        <Route path='/addaddress' element={<AddAddress/>} />
        <Route path='/paymentmethod' element={<PaymentMethod/>} />
      </Routes>
    </Router>
  );
}

export default App;

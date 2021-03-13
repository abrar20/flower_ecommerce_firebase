import React,{useState} from 'react';
import en from '../../assets/en.jpg';
import ar from '../../assets/ar.jpg';
import logo from '../../assets/logo.png';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { signOutUserStart } from '../../redux/User/user.actions';
import { selectCartItemsCount } from '../../redux/Cart/cart.selectors';
import { checkUserIsAdmin} from '../../Utils/index';
import  './Header.scss';

const mapState = (state) => ({
    currentUser: state.user.currentUser,
    totalNumCartItems: selectCartItemsCount(state)
  });

const Header=(props)=> {
    const [sideDrawer,setSideDrawer] = useState(false);
    const [upArrow,setUpArrow] =useState(false);
    const [subMenu,setSubMenu] =useState(false);
    const dispatch = useDispatch();
    const { currentUser, totalNumCartItems } = useSelector(mapState);
  
    const signOut = () => {
      dispatch(signOutUserStart());
    };
    const toggleArrow=()=>{
        setUpArrow(!upArrow);
    }
    const showSideDrawer =()=>{
        setSideDrawer(!sideDrawer);
    }
    const isAdmin = checkUserIsAdmin(currentUser);
    let p = 'Join Our Clients';
    if(isAdmin) p = <Link to='/admin'>My Admin</Link>
    return (
        <header>
        <div className="top">
            <div className="container">
                <div className="border-bottom">
                    <div className="row">
                        <div className="msg">
                            <div className="msg-content">
                                <p>{p}</p>
                            </div>
                        </div>
                        <div className="list">
                            <div className="list-content">
                                <ul>
                                    <li><a href="#">My Account
                                        <i className="fas fa-chevron-down"></i>
                                    </a>
                                        <ul>
                                            {currentUser && [
                                                <li key={1}><Link to="/dashboard">My account</Link></li>,
                                                <li key={2}><span onClick={()=> signOut()}>Logout</span></li>
                                            ]}
                                            {!currentUser && [
                                                <li key={1}><Link to="/login">login</Link></li>,
                                                <li key={2}><Link to="/register">Register</Link></li>,
                                                <li key={3}><Link to="/dashboard">My account</Link></li>
                                            ]}
                                            
                                        </ul>
                                    </li>
                                    <li><a href="#">Riyal (SAR)
                                        <i className="fas fa-chevron-down"></i>
                                    </a>
                                    <ul>
                                        <li><a href="#">$Dollar (US)</a></li>
                                        <li><a href="#">Dirham (AED)</a></li>
                                    </ul>
                                    </li>
                                    <li><a href="#">
                                        <img src={en} alt=""/>
                                        English
                                        <i className="fas fa-chevron-down"></i></a>
                                        <ul>
                                            <li><a href="#">
                                                <img src={ar} alt=""/>
                                                Arabic</a></li>
                                            
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
        <div className="bottom">
            <div className="container">
                <div className="row">
                    <div className="logo-area">
                        <div className="logo">
                            <img src={logo} alt="logo"/>
                        </div>
                    </div>
                    <div className="menu-area">
                        <div className="header-menu-right">
                            <div className="menu">
                                <nav>
                                    <ul>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link to="/products">Products</Link>
                                        </li>
                                        <li>
                                            <Link to="/brands">Brands</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="cart-icon">
                                <Link to="/cart"><i className="fa fa-shopping-bag" >
                                <span>{totalNumCartItems}</span></i></Link>
                                
                            </div>
                        
                        
                        </div>
                        <div className="mobile-menu">
                            <ul className="mobile-icons">
                                <li><Link to="/cart">
                                    <i className="fas fa-shopping-bag"><span>{totalNumCartItems}</span></i>
                                    
                                </Link></li>
                                <li><a href="#">
                                    <i className="fas fa-bars" onClick={showSideDrawer}></i>

                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`sidebar-menu ${sideDrawer ? 'show' : 'hide'}`}>
            <div className="close-menu">
            <i className="far fa-window-close" onClick={()=> setSideDrawer(false)}></i>
            </div>
            <nav className={`${sideDrawer? 'open': 'close'}`}>
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>
                        <Link to="/products">Products</Link> 
                    </li>
                    <li><Link to="/brands">Brands</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}
Header.defaultProps = {
    currentUser: null
  };

export default Header;
import React,{useState,useEffect} from 'react'
import './style.scss';
import FormInput from '../forms/FormInput/index';
import {useDispatch,useSelector} from 'react-redux'
import {Link,useHistory} from 'react-router-dom'
import Button from '../forms/Button/index';
import AuthWrapper from '../AuthWrapper/index';
import {emailSignInStart,googleSignInStart} from '../../redux/User/user.actions';
import Spinner from '../Spinner/Spinner';


const mapState= ({user})=>({
    currentUser: user.currentUser,
    loading: user.loading,
    userErr: user.userErr
});
const Signin =props=> {
    const dispatch =useDispatch();
    const history=useHistory();
    const {currentUser,loading, userErr} =useSelector(mapState);
    const [errors,setErrors]=useState(null);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    
    useEffect(() => {
        if (currentUser) {
          resetForm();
          history.push('/');
        }
    
      }, [currentUser]);

      useEffect(()=>{
        if(userErr !== null){
            setErrors(userErr);
        }
    },[userErr]);
    const resetForm =()=>{
        setEmail('');
        setPassword('');
    }
    const handleSubmit = async e=>{
        e.preventDefault();
        dispatch(emailSignInStart({email,password}));
    }
    const handleGoogleSignIn=()=>{
        dispatch(googleSignInStart());
    }
    
        
        const configAuthWrapper ={
            headline1:'LogIn',
            headline2:'Register',
            path:'/register'
        };
        
        if (loading){
            return <Spinner/>;
        }
        
        return (
            <AuthWrapper {...configAuthWrapper}>
                <div className="formWrap">
                {errors? (
                        <ul>
                            <li>
                                * {errors}
                            </li>
                        </ul>
                    ):null}
                <form onSubmit={handleSubmit}>
                <FormInput 
        type="email"
        name="email"
        value={email}
        placeholder="Email"
        handleChange={e => setEmail(e.target.value)}
        />
        <FormInput 
        type="password"
        name="password"
        value={password}
        placeholder="Password"
        handleChange={e => setPassword(e.target.value)}
        />
        <div className="links">
            <Link to='/recovery'>
                Forgot Password?
            </Link>
        </div>
        
        <div className="socialSignin">
        
            <Button className="btn first" type="submit">
            LogIn
            </Button>
                <Button className="btn second" onClick={handleGoogleSignIn}>
                    Sign in with Google
                </Button>
            
        </div>
                </form>
                    </div>
            </AuthWrapper>
        )
    
    
}
export default Signin;
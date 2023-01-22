import React, {useState} from 'react';
import './styles.scss';
import { signin } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Auth = () => {

  const initialState = ({ email: '',password: '' });
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) =>{
    setFormData({ ...formData, [e.target.name] : e.target.value})
  }

  const handleLogin = (e) => {
    console.log(formData);
    dispatch(signin, (formData, history));
  }
  
  return (
    <section id="entry-page">

    <form onSubmit={handleLogin}>
      <h2>Welcome Back!</h2>
      <fieldset>
        <legend>Log In</legend>
        <ul>
          <li>
            <label for="Email">Email:</label>
            <input type="text" id="username" required handleChange={handleChange} />
          </li>
          <li>
            <label for="password">Password:</label>
            <input type="password" id="password" required handleChange={handleChange}/>
          </li>
        </ul>
      </fieldset>
      <button type='submit'>Login</button>
    </form>

    </section>
  ); 
}

export default Auth
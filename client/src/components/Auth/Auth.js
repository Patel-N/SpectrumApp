import React, {useState} from 'react';
import './styles.scss';
import { signin } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import { useNavigate  } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Auth = () => {

  const initialState = ({ email: '',password: '' });
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) =>{
    console.log(e.target.name);
    setFormData({ ...formData, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    dispatch(signin(formData, navigate));
  }
  
  return (
    <section id="entry-page">

    <form onSubmit={handleSubmit}>
      <h2>Welcome Back!</h2>
      <fieldset>
        <legend>Log In</legend>
        <ul>
          <li>
            <label>Email:</label>
            <input type="text" name="email" required onChange={handleChange} />
          </li>
          <li>
            <label>Password:</label>
            <input type="password" name="password" required onChange={handleChange}/>
          </li>
        </ul>
      </fieldset>
      <Button type='submit'>Login</Button>
    </form>

    </section>
  ); 
}

export default Auth
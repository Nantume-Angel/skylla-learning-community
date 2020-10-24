/** @jsx jsx */
import {jsx} from '@emotion/core'

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from "../../firebase";

import * as ROUTES from '../../config/routes';
import SideBanner from '../components/sidebar';
import { Centered, FormGroup } from '../../components';
import * as colors from "../../styles/colors";
import './index.css';
import { Footer } from '../components/footer';

const SignUpPage = () => (
    <div css={{
        display: 'flex',
        flexDirection: 'row',
    }}>
        <SideBanner/>
        <div css={{
            width: '70%',
            position: 'relative',
            Height: '100vh',
           }}>
            <Centered>
                <div css={{marginBottom: '60px'}}>
                    <h5
                    css={{
                        
                    }}>create account</h5>
                    <SignUpForm />
                    <Footer/>
                </div>
            </Centered>
        </div>
    </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
    };

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        const { username, email, passwordOne } = this.state;
        this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(user => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
        })
        .catch(error => {
        this.setState({ error });
        });
        event.preventDefault();
        };
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
            } = this.state;    
            const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

    return (
        <form onSubmit={this.onSubmit} 
        css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            width: '350px',
            // backgroundColor: 'red'
        }}>
            <FormGroup>
                <label htmlFor="username">Full Name</label>
                <input className='form-control'
                    css={{
                        width: '320px',
                        padding: '5px 10px',
                        textAlign: 'center',
                        borderRadius: '7px'
                    }}
                    id="username"
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Name"
                />
            </FormGroup>
            <FormGroup>
                <label htmlFor="email">Email Address</label>
                <input className='form-control'
                      css={{
                        width: '320px',
                        padding: '5px 10px',
                        textAlign: 'center',
                        borderRadius: '7px'
                    }}
                    id="email"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="email"
                    placeholder="Email"
                />
            </FormGroup>
            <FormGroup>
                <label htmlFor="passwordOne">Password</label>
                <input className='form-control'
                      css={{
                        width: '320px',
                        padding: '5px 10px',
                        textAlign: 'center',
                        borderRadius: '7px'
                    }}
                    id="passwordOne"
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
            </FormGroup>
            <FormGroup>
                <label htmlFor="passwordTwo"> Confirm Password</label>
                <input className='form-control'
                  css={{
                    width: '320px',
                    padding: '5px 10px',
                    textAlign: 'center',
                    borderRadius: '7px'
                }}
                    id="passwordTwo"
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                />
            </FormGroup>
            <FormGroup css={{display: 'flex', 
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: '10px',
        }}>
                <input css={{
                   marginLeft: '0'
                }} id="terms" type='checkbox'/>
                <label htmlFor="terms"
                css={{
                    marginTop: '8px',
                    padding: '10px',
                    fontSize: '14px'
                }}>I agree to <a href="#" css={{
                    backgroundColor: colors.blue,
                    color: "#000000" }}>Terms</a> of service and to Skylla <a href="#"
                    css={{
                        backgroundColor: colors.blue,
                        color: "#000000"  
                    }}>Polices</a> </label>
            </FormGroup>
            <button className="btn"
              css={{
                padding: '8px 10px',
                textAlign: 'center',
                borderRadius: '7px',
                marginTop: '25px',
                backgroundColor: colors.blue,
                color: colors.base,
            }}
            disabled = {isInvalid} type="submit">CREATE ACCOUNT</button>
            {error && <p css={{
                padding: '15px 0px 0px 0px'
            }}>{error.message}</p>}
        </form>
    );
    }
}

const SignUpLink = () => (
<p>
Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
</p>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
    )(SignUpFormBase);
    

export { SignUpPage, SignUpLink };

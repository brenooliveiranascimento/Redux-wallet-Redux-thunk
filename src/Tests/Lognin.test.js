/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Test Auth Screen', () => {
  it('exist a email input in screen', () => {
    render(<App />);
    const inputEmail = screen.getByTestId('email-input');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
  });
  it('exist passwordInput in screen', () => {
    render(<App />);
    const passwordInput = screen.getByTestId('password-input');
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveProperty('type', 'password');
  });
  it('exist a sigin and register button in screen', () => {
    render(<App />);
    const signBtn = screen.getByTestId('signin-btn');
    const registerBtn = screen.getByTestId('register-btn');
    expect(signBtn).toHaveTextContent('entrar');
    expect(signBtn).toHaveProperty('type', 'button');
    expect(registerBtn).toHaveTextContent('Criar uma conta');
    expect(registerBtn).toHaveProperty('type', 'button');
  });
  it('if click in create new account add name input in screen', () => {
    render(<App />);
    const registerBtn = screen.getByTestId('register-btn');
    userEvent.click(registerBtn);
    const nameInput = screen.getByTestId('name-input');
    expect(nameInput).toBeInTheDocument();
  });
});

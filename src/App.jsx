// src/App.js
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const StyledForm = styled.form`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8rem;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel htmlFor="name">Nombre</StyledLabel>
        <StyledInput
          id="name"
          {...register('name', { required: 'El nombre es requerido' })}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

        <StyledLabel htmlFor="email">Correo Electrónico</StyledLabel>
        <StyledInput
          id="email"
          type="email"
          {...register('email', {
            required: 'El correo electrónico es requerido',
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: 'Correo electrónico no válido',
            },
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <StyledLabel htmlFor="password">Contraseña</StyledLabel>
        <StyledInput
          id="password"
          type="password"
          {...register('password', {
            required: 'La contraseña es requerida',
            minLength: {
              value: 6,
              message: 'La contraseña debe tener al menos 6 caracteres',
            },
          })}
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}

        <SubmitButton type="submit">Enviar</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
}

export default App;

import React from "react";
import moment from "moment";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from "../../../_actions/user_actions";
import { useDispatch } from "react-redux";

import {
  Form,
  Input,
  Button,
} from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function RegisterPage(props) {
  const dispatch = useDispatch();
  return (

    <Formik
      initialValues={{
        email: '',
        sobrenome: '',
        nome: '',
        senha: '',
        confirma_senha: ''
      }}
      validationSchema={Yup.object().shape({
        nome: Yup.string()
          .required('Name is required'),
        sobrenome: Yup.string()
          .required('Last Name is required'),
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        senha: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
        confirma_senha: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          let dataToSubmit = {
            email: values.email,
            senha: values.senha,
            nome: values.nome,
            sobrenome: values.sobrenome,
            image: `http://gravatar.com/avatar/${moment().unix()}?d=identicon`
          };

          dispatch(registerUser(dataToSubmit)).then(response => {
            if (response.payload.success) {
              props.history.push("/login");
            } else {
              alert(response.payload.err.errmsg)
            }
          })

          setSubmitting(false);
        }, 500);
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <div className="app">
            <h2>Sign up</h2>
            <Form style={{ minWidth: '375px' }} {...formItemLayout} onSubmit={handleSubmit} >

              <Form.Item required label="Nome">
                <Input
                  id="nome"
                  placeholder="Digite o seu nome"
                  type="text"
                  value={values.nome}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.nome && touched.nome ? 'text-input error' : 'text-input'
                  }
                />
                {errors.nome && touched.nome && (
                  <div className="input-feedback">{errors.nome}</div>
                )}
              </Form.Item>

              <Form.Item required label="Sobrenome">
                <Input
                  id="sobrenome"
                  placeholder="Digite o seu sobrenome"
                  type="text"
                  value={values.sobrenome}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.sobrenome && touched.sobrenome ? 'text-input error' : 'text-input'
                  }
                />
                {errors.sobrenome && touched.sobrenome && (
                  <div className="input-feedback">{errors.sobrenome}</div>
                )}
              </Form.Item>

              <Form.Item required label="Email" hasFeedback validateStatus={errors.email && touched.email ? "error" : 'success'}>
                <Input
                  id="email"
                  placeholder="Digite o seu Email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? 'text-input error' : 'text-input'
                  }
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
              </Form.Item>

              <Form.Item required label="Senha" hasFeedback validateStatus={errors.senha && touched.senha ? "error" : 'success'}>
                <Input
                  id="senha"
                  placeholder="Digite a sua senha"
                  type="password"
                  value={values.senha}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.senha && touched.senha ? 'text-input error' : 'text-input'
                  }
                />
                {errors.senha && touched.senha && (
                  <div className="input-feedback">{errors.senha}</div>
                )}
              </Form.Item>

              <Form.Item required label="Confirmar a senha" hasFeedback>
                <Input
                  id="confirma_senha"
                  placeholder="Confirme a senha"
                  type="password"
                  value={values.confirma_senha}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.confirma_senha && touched.confirma_senha ? 'text-input error' : 'text-input'
                  }
                />
                {errors.confirma_senha && touched.confirma_senha && (
                  <div className="input-feedback">{errors.confirma_senha}</div>
                )}
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button onClick={handleSubmit} type="primary" disabled={isSubmitting}>
                  Enviar
                </Button>
              </Form.Item>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};


export default RegisterPage

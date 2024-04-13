import { Form, Input, Button, Checkbox  } from 'antd';
import style from './registerForm.module.css'
import { Link } from 'react-router-dom';
import InputMask, { Props as InputMaskProps } from 'react-input-mask';
import { useState } from 'react';
import { useAppDispatch } from '../../customHooks/redux/redux';
import { userSlice } from '../../stores/RTKQuery/users';
import Cookies from 'universal-cookie';
import { SetAuth, SetRoles, SetUser } from '../../stores/slices/userSlice/userSlice';

const RegisterForm = () => {
  
 // const MaskedInput: React.FC<InputMaskProps> = (props) => <InputMask {...props} />;
 const [phoneNumber, setPhone] = useState('');
 const [register, {} ] = userSlice.useRegisterUserMutation();
 const dispatch = useAppDispatch();

const onFinish = async (values: any) => {
  const { password } = values;
  console.log(phoneNumber);
  console.log(password);
  const phone = phoneNumber.replace(/\D/g, '');
  const userResult = await register({phone, password}).unwrap()
  const cookies = new Cookies();
  cookies.set('refresh', userResult.refreshToken, { path: '/', maxAge: 365 * 24 * 60 * 60});
  localStorage.setItem('token', userResult.token);

  dispatch(SetAuth(true));
  dispatch(SetUser(userResult));
  const tokenParts = userResult.token?.split('.') as string[];
  const tokenPayload = JSON.parse(atob(tokenParts[1]));
  const roles = tokenPayload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
  dispatch(SetRoles(roles));
  setPhone('');
}



    const formItemLayout = {
        labelCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 10,
          },
        },
        wrapperCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 16,
          },
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
  return (
    <main className={style.container}>
      <Form
        {...formItemLayout}
        onFinish={onFinish}
        name="register"
        style={{
          maxWidth: 800,
          padding: '50px 100px'
        }}
        scrollToFirstError
      >
          <Form.Item
            name="phone"
            label="Номер телефона"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите номер телефона",
              }
            ]}
          >
            <InputMask
             mask="8 (999) 999-99-99"
              value={phoneNumber} // Использование состояния для value
              onChange={(e) => setPhone(e.target.value)} // Обновление состояния при изменении
            >
              {(inputProps) => <Input {...inputProps} type="tel" />}
            </InputMask>
          </Form.Item>

        <Form.Item
          name="password"
          label="Пароль"
          rules={[
            {
              required: true,
              message: "Пожалуйста, придумайте пароль",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Повторите пароль"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Пожалуйста, подтвердите пароль",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Пароли не совпадают!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Вам нужно принять условия")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            Я прочитал <Link target='_blank' to="/agreement">условия</Link>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Зарегистрироваться
          </Button>
          <p>уже есть аккаунт? <Link to='../login'>Войти</Link></p>
        </Form.Item>
      </Form>
    </main>
  );
}

export default RegisterForm
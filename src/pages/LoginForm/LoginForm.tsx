import { Form, Input, Button } from 'antd';
import style from './LoginForm.module.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { userSlice } from '../../stores/RTKQuery/users';
import { SetAuth, SetRoles, SetUser } from '../../stores/slices/userSlice/userSlice';
import { useAppDispatch } from '../../customHooks/redux/redux';
import Cookies from 'universal-cookie';
import { ILoginDate } from '../../types';
const LoginForm = () => {

  const [login ] = userSlice.useLoginUserMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate(); 
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

 const onFinish = async (values: ILoginDate) => {
  try {
    const { phoneNumber, password } = values;
    const phone = phoneNumber.replace(/\D/g, '');
    const userResult = await login({phone, password, remember: true}).unwrap()
    localStorage.setItem('token', userResult.token);

    const cookies = new Cookies();
    cookies.set('refresh', userResult.refreshToken, { path: '/', maxAge: 365 * 24 * 60 * 60});
  

    dispatch(SetAuth(true));
    dispatch(SetUser(userResult));


    const tokenParts = userResult.token?.split('.') as string[];
    const tokenPayload = JSON.parse(atob(tokenParts[1]));
    const roles = tokenPayload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    dispatch(SetRoles(roles));
    handleRedirect();


  } catch (error) {
    console.log(error)
  }
};



const handleRedirect = () => {
  navigate(from, {replace: true});
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
        name="login"
        style={{
          maxWidth: 800,
          padding: '50px 100px'
        }}
        scrollToFirstError
      >
          <Form.Item
            name="phoneNumber"
            label="Номер телефона"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите номер телефона",
              }
            ]}
            hasFeedback
          >
            <InputMask
             mask="8 (999) 999-99-99"
            >
              {/* @ts-ignore */}
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
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
          <p>нет аккаунта? <Link to='../register'>Зарегистрироваться</Link></p>
        </Form.Item>
      </Form>
    </main>
  );
}

export default LoginForm
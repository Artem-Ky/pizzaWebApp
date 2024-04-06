import { Form, Input, Button } from 'antd';
import style from './LoginForm.module.css'
import { Link } from 'react-router-dom';
import InputMask, { Props as InputMaskProps } from 'react-input-mask';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../stores/slices/userSlice';
const LoginForm = () => {

  const dispatch = useDispatch();



 const onFinish = (values: any) => {

  const { phoneNumber, password } = values;
  const phone = phoneNumber.replace(/\D/g, '');
  console.log (phone, password);
  dispatch(loginUser({ phone, password }));
};



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
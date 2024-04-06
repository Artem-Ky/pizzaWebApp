import { Form, Input, Button, Checkbox  } from 'antd';
import style from './registerForm.module.css'
import { Link } from 'react-router-dom';
import InputMask, { Props as InputMaskProps } from 'react-input-mask';
import { useState } from 'react';
const RegisterForm = () => {
 // const MaskedInput: React.FC<InputMaskProps> = (props) => <InputMask {...props} />;
  const [phone, setPhone] = useState('');
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
              value={phone} // Использование состояния для value
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
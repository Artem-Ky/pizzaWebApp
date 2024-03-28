import { Form, Input, Button, Checkbox, Select, Flex } from 'antd';
import style from './registerForm.module.css'
import { Link } from 'react-router-dom';

const RegisterForm = () => {
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
          name="email"
          label="Электронная почта"
          rules={[
            {
              type: "email",
              message: "Почта должна быть формата example@mail.ru",
            },
            {
              required: true,
              message: "Пожалуйста, введите адрес электронной почты",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Номер телефона"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите номер телефона",
            },
          ]}
        >
          <Input
            addonBefore={+7}
            style={{
              width: "100%",
            }}
          />
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
          name="gender"
          label="Пол"
          rules={[
            {
              required: true,
              message: "Пожалуйста, выберите пол",
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Select.Option value="male">М</Select.Option>
            <Select.Option value="female">Ж</Select.Option>
          </Select>
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
            Register
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
}

export default RegisterForm
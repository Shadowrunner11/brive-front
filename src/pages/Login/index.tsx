import { FormEvent, useCallback, useRef } from "react";
import { useSignIn } from "react-auth-kit";

import { formDataToPojo } from "../../tools";
import { Password } from "../../components/Password";

import styles from "./style.module.css";
import { Card } from "../../components/Card";

const LoginContent = () => (
  <>
    <h1>
      <strong>Bienvenido de vuelta</strong>
    </h1>
    <input name="email" type="text" />
    <Password name="password" />
  </>
);

export default function Login() {
  const formRef = useRef<HTMLFormElement>(null);

  const signIn = useSignIn();

  const _handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!formRef.current) return;

      const formData = new FormData(formRef.current);

      const userData = formDataToPojo(formData);

      signIn({
        token: "sdsadasd",
        tokenType: "Bearer",
        expiresIn: new Date().getTime(),
      });

      console.dir(userData);
    },
    [signIn],
  );

  return (
    <form className={styles.loginForm} onSubmit={_handleSubmit} ref={formRef}>
      <Card
        cardContent={<LoginContent />}
        cardAction={<button type="submit">Sign in</button>}
      />
    </form>
  );
}

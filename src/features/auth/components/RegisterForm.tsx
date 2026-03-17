import { AuthWrapper } from "./AuthWrapper";

export function RegisterForm() {
  return( <AuthWrapper
  heading="Регистрация"
  description="Введите email и пароль для регистрации"
  backButtonLabel="Уже есть аккаунт? Войти"
  backButtonHref="/auth/login"
  isShowSocial
  >Register form
  </AuthWrapper>
  )
}
'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, TypeRegisterSchema } from "../schemas";
import { AuthWrapper } from "./AuthWrapper";
import { useForm } from 'react-hook-form'
import { Button, Field, FieldSet, Input } from "@/shared/components/ui";

export function RegisterForm() {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<TypeRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordRepeat: ''
    }
  });

  const onSubmit = (values: TypeRegisterSchema) => {
    console.log(values);
  }

  return( <AuthWrapper
  heading="Регистрация"
  description="Введите email и пароль для регистрации"
  backButtonLabel="Уже есть аккаунт? Войти"
  backButtonHref="/auth/login"
  isShowSocial>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <FieldSet>
          <Field className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Имя
            </label>
            <Input
              id="name"
              placeholder="Введите имя"
              {...register('name')}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </Field>

          <Field className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="example@mail.com"
              {...register('email')}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </Field>

          <Field className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium leading-none">
              Пароль
            </label>
            <Input
              id="password"
              type="password"
              placeholder="******"
              {...register('password')}
              className={errors.password ? 'border-destructive': ''}
            />
            {errors.password && (
              <p className="text-sm text-destructive">{errors.password.message}</p>
            )}
          </Field>

          <Field className="space-y-2">
            <label htmlFor="passwordRepeat" className="text-sm font-medium leading-none">
              Подтверждение пароля
            </label>
            <Input
              id="passwordRepeat"
              type="password"
              placeholder="******"
              {...register('passwordRepeat')}
              className={errors.passwordRepeat ? 'border-destructive' : ''}
            />
            {errors.passwordRepeat && (
              <p className="text-sm text-destructive">{errors.passwordRepeat.message}</p>
            )}
          </Field>

          <Button type="submit" className="w-full">
            Создать аккаунт
          </Button>
      </FieldSet>
    </form>
  </AuthWrapper>
  )
}
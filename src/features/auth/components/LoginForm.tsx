'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../schemas";
import { AuthWrapper } from "./AuthWrapper";
import { useForm } from 'react-hook-form'
import { Button, Field, FieldSet, Input } from "@/shared/components/ui";
import { TypeLoginSchema } from "../schemas";
export function LoginForm() {

  const {
    register,
    handleSubmit,
    formState: { errors}
  } = useForm<TypeLoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  });

  const onSubmit = (values: TypeLoginSchema) => {
    console.log(values);
  }

  return( <AuthWrapper
  heading="Войти"
  description="Введите логин и пароль для входа"
  backButtonLabel="Нет аккаунта? Регистрация"
  backButtonHref="/auth/register"
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


          <Button type="submit" className="w-full">
            Войти в аккаунт
          </Button>
      </FieldSet>
    </form>
  </AuthWrapper>
  )
}
import React from 'react';
import './AuthForm.css';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, SubmitHandler, Controller, useFormState } from 'react-hook-form';
import { loginValidation, passwordValidation } from './validation';

type FormInputs = {
    login: string;
    password: string;
};//тип названий каждого элемента формы

export const AuthForm: React.FC = () => {
    const { control, reset, handleSubmit } = useForm<FormInputs>({
        mode: 'onBlur',
    })

    //взаимодействие с состоянием формы, необходимо передать объект control из хука useForm
    const { errors } = useFormState({control})

    //функция по нажатию отправки
    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log(data);
        reset()
    }

    return (
        <div className='auth-form'>
            <Typography variant="h4" component="div">
                Sign in
            </Typography>
            <Typography variant="subtitle1" component="div" gutterBottom className='auth-form__subtitle'>
                To get access
            </Typography>
            <form className='auth-form__body' onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    defaultValue=''
                    control={control}
                    rules={loginValidation}//правила для валидации формы
                    name="login"//имя нужного инпута
                    render={({ field }) => (
                        <TextField
                            label="Login"
                            fullWidth
                            margin="normal"
                            onChange={(e) => field.onChange(e)}
                            value={field.value}
                            error={!!errors.login?.message}
                            helperText={errors.login?.message}
                        />
                    )}// в этом методе компонента из библиотек
                />
                <Controller
                    control={control}
                    defaultValue=''
                    rules={passwordValidation}
                    name='password'
                    render={({ field }) => (
                        <TextField
                            //type="password"
                            label="Password"
                            fullWidth
                            margin="normal"
                            onChange={(e) => field.onChange(e)}
                            value={field.value}
                            error={!!errors.password?.message}
                            helperText={errors.password?.message}
                        />
                    )}
                />
                <Button
                    type='submit'
                    variant="outlined"
                    fullWidth
                    sx={{
                        marginTop: 2
                    }}
                >sign in</Button>
            </form>
        </div>
    )
};

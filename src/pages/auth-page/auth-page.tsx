import React from 'react';
import Typography from '@mui/material/Typography';
import { AuthForm } from '../../components/auth-form/AuthForm';
import './auth-page.css';


export const AuthPage: React.FC = () => {
    return (
        <div className='auth-page'>
            <Typography variant="h3" component="div" gutterBottom>
                Auth-Page
            </Typography>
            <AuthForm />
        </div>
    )
};


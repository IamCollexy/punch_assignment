import React, { useState } from 'react';
import { useFormik } from 'formik';
import {
  Button,
  OutlinedInput,
  Typography,
  Container,
  Stack,
  Box,
  InputAdornment,
  IconButton,
} from '@mui/material';
import * as Yup from 'yup';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/slices/userSlice';
import { setIsAuth } from '../../../store/slices/isAuthSlice';
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

const LoginForm = ({ onSubmit }) => {
  const theme = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,

    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      dispatch(
        setUser({ email: values.email, password: values.password })
      );
      dispatch(setIsAuth({ isAuth: true, accessToken: '1234' }));
      router.push('/');
    },
  });

  const handleClickShowPassword = () =>
    setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.common.white,
        minHeight: '100vh',
        mt: '30px',
      }}
    >
      <Container
        component="form"
        onSubmit={formik.handleSubmit}
        maxWidth="sm"
        sx={{
          height: '75vh',
          width: { xs: '90%', md: '500px' },
          margin: 'auto',
          backgroundColor: theme.palette.common.white,
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          pt: 6,
          borderRadius: 4,
          position: 'relative',
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>

          <Typography
            variant="body1"
            position={'relative'}
            textAlign={'center'}
            color={theme.palette.text.disabled}
          >
            Login to continue
          </Typography>
          <OutlinedInput
            name="email"
            variant="outlined"
            margin="normal"
            placeholder="enter email"
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            error={
              formik.touched.email && Boolean(formik.errors.email)
            }
          />
          <Typography color="error">{formik.errors.email}</Typography>
          <OutlinedInput
            name="password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            margin="normal"
            placeholder="password"
            fullWidth
            value={formik.values.password}
            onChange={formik.handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <VisibilityOff
                      sx={{ fill: theme.palette.text.disabled }}
                    />
                  ) : (
                    <Visibility
                      sx={{ fill: theme.palette.text.disabled }}
                    />
                  )}
                </IconButton>
              </InputAdornment>
            }
            error={
              formik.touched.password &&
              Boolean(formik.errors.password)
            }
          />
          <Typography color="error">
            {formik.errors.password}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'end',
              color: 'red',
              width: '100%',
              cursor: 'pointer',
            }}
          >
            <Typography variant="body1">Forgot Password</Typography>
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              padding: '10px',
              color: theme.palette.common.white,
            }}
          >
            Login
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default LoginForm;

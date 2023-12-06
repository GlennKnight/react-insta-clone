import { Input, Button, Alert, AlertIcon } from '@chakra-ui/react';
import { useState } from 'react';
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const { handleLogin, isLoggingIn, error } = useLogin();

    return (
        <>
            <Input placeholder='Email' type='email' fontSize={14}
                value={inputs.email} size={'sm'}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}></Input>
            <Input placeholder='Password' type='password' fontSize={14}
                value={inputs.password} size={'sm'}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}></Input>
            <Button w={'full'} colorScheme='blue' size={'sm'} fontSize={14} isLoading={isLoggingIn} type='submit' onClick={() => handleLogin(inputs)}>Log in</Button>
            {error && <Alert status='error' fontSize={13} p={2} borderRadius={4}>
                <AlertIcon fontSize={12} />
                {error.message}
            </Alert>}
        </>
    )
}

export default Login;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Heading,
  Container,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handlePasswordReset = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    // Implement password reset functionality here
    navigate('/signin');
  };

  return (
    <Container maxW="md" centerContent p={4}>
      <Box
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        p={8}
        bg="gray.50"
        w="full"
        maxW="md"
      >
        <Heading as="h2" size="lg" mb={6} textAlign="center" color="blue.600">
          Forgot Password
        </Heading>
        <form onSubmit={handlePasswordReset}>
          <Stack spacing={6}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                borderColor="blue.500"
                _hover={{ borderColor: 'blue.700' }}
                focusBorderColor="blue.700"
              />
            </FormControl>
            <Button
              colorScheme="blue"
              type="submit"
              width="full"
              size="lg"
              borderRadius="md"
              boxShadow="md"
              _hover={{ bg: 'blue.600' }}
            >
              Send Reset Link
            </Button>
          </Stack>
        </form>
        <Stack spacing={4} mt={6} textAlign="center">
          <Text fontSize="sm">
            Remembered your password?{' '}
            <Link to="/signin" style={{ color: '#3182ce', fontWeight: 'bold' }}>
              Sign In
            </Link>
          </Text>
        </Stack>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
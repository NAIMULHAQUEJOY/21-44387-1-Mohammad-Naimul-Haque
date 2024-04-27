import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

interface FormData {
  employer_name: string;
  company_name: string;
  contact_no: string;
  username: string;
  password: string;
}

const Register = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post('http://localhost:3000/employers', data);
      reset();
      setError(null);
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('employer_name')} placeholder="Employer Name" />
        <input {...register('company_name')} placeholder="Company Name" />
        <input {...register('contact_no')} placeholder="Contact No" />
        <input {...register('username')} placeholder="Username" />
        <input {...register('password')} type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
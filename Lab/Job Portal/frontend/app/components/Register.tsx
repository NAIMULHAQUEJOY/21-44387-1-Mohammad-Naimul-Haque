'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styles from './Register.module.css';

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
    <div className={styles.container}>
      <h2 className={styles.heading}>Register</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input
          {...register('employer_name')}
          placeholder="Employer Name"
          className={styles.input}
        />
        <input
          {...register('company_name')}
          placeholder="Company Name"
          className={styles.input}
        />
        <input
          {...register('contact_no')}
          placeholder="Contact No"
          className={styles.input}
        />
        <input
          {...register('username')}
          placeholder="Username"
          className={styles.input}
        />
        <input
          {...register('password')}
          type="password"
          placeholder="Password"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Search.module.css';

interface Employer {
  id: number;
  employer_name: string;
  company_name: string;
  contact_no: string;
  username: string;
}

const Search = () => {
  const [employers, setEmployers] = useState<Employer[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchEmployers = async () => {
      try {
        const response = await axios.get<Employer[]>('http://localhost:3000/employers');
        setEmployers(response.data);
      } catch (err) {
        console.error('Failed to fetch employers:', err);
      }
    };
    fetchEmployers();
  }, []);

  const filteredEmployers = employers.filter(
    (employer) =>
      employer.employer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employer.company_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    // Perform search logic here
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Search Employers</h2>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search by name or company"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.input}
        />
        <button className={styles.searchButton} onClick={handleSearch}>
          Search
        </button>
      </div>
      <ul className={styles.employerList}>
        {filteredEmployers.map((employer) => (
          <li key={employer.id} className={styles.employerItem}>
            <p>Employer Name: {employer.employer_name}</p>
            <p>Company Name: {employer.company_name}</p>
            <p>Contact No: {employer.contact_no}</p>
            <p>Username: {employer.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
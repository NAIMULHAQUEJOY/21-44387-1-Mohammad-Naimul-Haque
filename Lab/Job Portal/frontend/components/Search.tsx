import { useState, useEffect } from 'react';
import axios from 'axios';

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

  return (
    <div>
      <h2>Search Employers</h2>
      <input
        type="text"
        placeholder="Search by name or company"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredEmployers.map((employer) => (
          <li key={employer.id}>
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
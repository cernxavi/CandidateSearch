import { useState } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';
import { searchGithub } from '../api/API.tsx';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Fetch candidates based on the search term
  const fetchCandidates = async () => {
    console.log('Fetching candidates for:', searchTerm); // Log when the API request is about to be made
    if (!searchTerm) return; // Do nothing if the search term is empty

    try {
      const result = await searchGithub(searchTerm); // Fetch results based on searchTerm
      if (result.length === 0) {
        setError('No candidates found.');
      } else {
        setCandidates(result); // Update the candidates state
        setError(null); // Clear any previous errors
      }
    } catch (err) {
      setError('Failed to fetch candidates');
      console.error(err);
    }
  };

  // Handle the form submission (search action)
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search form submitted'); // Log to verify the form submission
    fetchCandidates(); // Call the fetchCandidates function
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for candidates"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on input change
        />
        <button type="submit">Search</button>
      </form>
      
      {error && <p>{error}</p>} {/* Display error message if fetching fails */}

      {/* Display list of candidates */}
      <ul>
        {candidates.map((candidate) => (
          <li class='search' key={candidate.id}>
            <img src={candidate.avatar_url} alt={`${candidate.login}'s avatar`} width="50" />
            <p class='search' >{candidate.login}</p>
            <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
            <button class='add' type='submit' href='Starter-Code/src/pages/PotentialCandidates.tsx' >+</button>
            <button class='delete' type='submit' href='Starter-Code/src/pages/PotentialCandidates.tsx' >-</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateSearch;

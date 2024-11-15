import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  // Fetch saved candidates from local storage on initial load
  useEffect(() => {
    const storedCandidates = localStorage.getItem('candidates');
    if (storedCandidates) {
      setSavedCandidates(JSON.parse(storedCandidates));
    }
  }, []);

  return (
    <div>
      <h1>Saved Candidates</h1>
      
      {/* Display message if no candidates are saved */}
      {savedCandidates.length === 0 ? (
        <p>No saved candidates found.</p>
      ) : (
        <ul>
          {savedCandidates.map((candidate) => (
            <li key={candidate.id}>
              <img
                src={candidate.avatar_url}
                alt={`${candidate.login}'s avatar`}
                width="50"
              />
              <p>{candidate.login}</p>
              <a
                href={candidate.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedCandidates;

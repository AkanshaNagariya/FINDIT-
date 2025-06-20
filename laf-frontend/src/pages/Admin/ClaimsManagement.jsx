import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/common/Sidebar';
import '../../assets/styles/claims-management.css';

const ClaimsManagement = () => {
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // In a real app, you would fetch claims from your API
    const fetchClaims = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          setClaims([
            {
              id: 1,
              item: { id: 101, title: 'Lost Wallet', status: 'FOUND' },
              user: { name: 'John Doe', email: 'john@college.edu' },
              proofDescription: 'My student ID is inside the wallet',
              status: 'PENDING',
              dateSubmitted: '2023-05-15T10:30:00Z'
            },
            {
              id: 2,
              item: { id: 102, title: 'MacBook Pro', status: 'FOUND' },
              user: { name: 'Jane Smith', email: 'jane@college.edu' },
              proofDescription: 'Serial number matches my device',
              status: 'PENDING',
              dateSubmitted: '2023-05-14T14:45:00Z'
            }
          ]);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to load claims');
        setLoading(false);
      }
    };

    fetchClaims();
  }, []);

  const handleClaimAction = (claimId, action) => {
    // In a real app, you would call your API to update the claim status
    setClaims(prevClaims =>
      prevClaims.map(claim =>
        claim.id === claimId ? { ...claim, status: action } : claim
      )
    );
  };

  return (
    <div className="claims-management-page">
      <Sidebar />
      
      <main className="claims-management-content">
        <div className="container">
          <div className="page-header">
            <h1>Claims Management</h1>
            <Link to="/admin/dashboard" className="btn btn-outline">
              Back to Dashboard
            </Link>
          </div>
          
          {loading ? (
            <div className="loading-spinner">
              <div className="spinner"></div>
            </div>
          ) : error ? (
            <div className="error-message">{error}</div>
          ) : (
            <div className="claims-list">
              {claims.length === 0 ? (
                <div className="no-claims">
                  <p>No pending claims found</p>
                </div>
              ) : (
                claims.map(claim => (
                  <div key={claim.id} className="claim-card">
                    <div className="claim-header">
                      <h3>
                        <Link to={`/items/${claim.item.id}`}>{claim.item.title}</Link>
                      </h3>
                      <span className={`claim-status ${claim.status.toLowerCase()}`}>
                        {claim.status}
                      </span>
                    </div>
                    
                    <div className="claim-details">
                      <p><strong>Claimant:</strong> {claim.user.name} ({claim.user.email})</p>
                      <p><strong>Submitted:</strong> {new Date(claim.dateSubmitted).toLocaleString()}</p>
                      <p><strong>Proof:</strong> {claim.proofDescription}</p>
                    </div>
                    
                    {claim.status === 'PENDING' && (
                      <div className="claim-actions">
                        <button 
                          onClick={() => handleClaimAction(claim.id, 'APPROVED')}
                          className="btn btn-primary"
                        >
                          Approve
                        </button>
                        <button 
                          onClick={() => handleClaimAction(claim.id, 'REJECTED')}
                          className="btn btn-outline"
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ClaimsManagement;
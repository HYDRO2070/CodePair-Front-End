import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../CSS/ProfilePage.css';

const ProfilePage = () => {
    const { username } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`https://codepair-back-end.onrender.com/api/profile/${username}`, {
                    method: 'GET'
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }

                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [username]);

    if (!user) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="profile-page">
            <div className="left-section">
                <img
                    src={user.profileImage}
                    alt={`${user.username}'s profile`}
                    className="profile-image"
                />
                <h1>{user.username}</h1>
                <p className="created-at">Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
                <p className="user-bio">{user.bio || 'No bio available.'}</p>
                <button className="follow-button">Follow</button>
            </div>
            <div className="right-section">
                <div className="stats-box">
                    <div className="stat-row easy">
                        <span>Easy: </span><span>{user.solvedCounts.easy}</span>
                    </div>
                    <div className="stat-row medium">
                        <span>Medium: </span><span>{user.solvedCounts.medium}</span>
                    </div>
                    <div className="stat-row hard">
                        <span>Hard: </span><span>{user.solvedCounts.hard}</span>
                    </div>
                </div>
                <div className="solved-problems">
                    <h2>Solved Problems</h2>
                    <ul>
                        {user.solvedProblems.map((problem, index) => (
                            <li key={index}>{problem}</li>
                        ))}
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default ProfilePage;

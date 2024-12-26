import React from 'react';
type Props = {
    title: string;
    children?: React.ReactNode; // Explicitly include children
  };
const AuthCard: React.FC<Props> = ({title, children}) => {
    const cardStyle = {
        width: "400px",
        color: "#ffffff", // White text
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      };
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card border-0 shadow bg-dark-subtle" style={cardStyle}>
            <div className="card-body">
                <h5 className="card-title text-center mb-4">{title}</h5>
                {children}
            </div>
        </div>
    </div>
  );
};

export default AuthCard;


import React from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  requireAuth?: boolean;
}

const ProtectedLink: React.FC<ProtectedLinkProps> = ({ 
  to, 
  children, 
  className = "",
  requireAuth = true 
}) => {
  const navigate = useNavigate();
  
  // For demo purposes - in a real app, this would come from authentication context
  const isAuthenticated = false;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (requireAuth && !isAuthenticated) {
      navigate('/signin');
    } else {
      navigate(to);
    }
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

export default ProtectedLink;

import React from 'react';
import { AlertTriangle, Droplets, Cloud } from 'lucide-react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <Droplets className="logo-icon" />
          <h1>{title}</h1>
        </div>
        <div className="header-right">
          <div className="status-indicators">
            <div className="status-item">
              <Cloud className="status-icon" />
              <span>Weather: Normal</span>
            </div>
            <div className="status-item alert">
              <AlertTriangle className="status-icon" />
              <span>Alert Level: Medium</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
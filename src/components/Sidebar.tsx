import React from 'react';
import { BarChart3, MessageCircle, Shield, Bell, Home, Settings } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'monitoring', label: 'Flood Monitoring', icon: BarChart3 },
    { id: 'alerts', label: 'Alerts & Warnings', icon: Bell },
    { id: 'chatbot', label: 'Flood Assistant', icon: MessageCircle },
    { id: 'emergency', label: 'Emergency', icon: Shield },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              <Icon className="nav-icon" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
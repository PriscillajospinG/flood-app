import React from 'react';
import { TrendingUp, Users, AlertCircle } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Current Water Level', value: '2.3m', change: '+0.2m', status: 'normal' },
    { title: 'Risk Level', value: 'Medium', change: 'Stable', status: 'warning' },
    { title: 'Affected Areas', value: '12', change: '+2', status: 'alert' },
    { title: 'Active Sensors', value: '48/50', change: '96% Online', status: 'normal' },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Flood Management Dashboard</h2>
        <p>Real-time monitoring and flood risk assessment</p>
      </div>
      
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className={`stat-card ${stat.status}`}>
            <div className="stat-header">
              <h3>{stat.title}</h3>
              {stat.status === 'alert' && <AlertCircle className="stat-icon alert" />}
              {stat.status === 'warning' && <AlertCircle className="stat-icon warning" />}
              {stat.status === 'normal' && <TrendingUp className="stat-icon normal" />}
            </div>
            <div className="stat-content">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-change">{stat.change}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-content">
        <div className="content-placeholder">
          <Users className="placeholder-icon" />
          <h3>Dashboard Overview</h3>
          <p>This is where the main dashboard content will be displayed. Charts and monitoring data will be added in the next steps.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
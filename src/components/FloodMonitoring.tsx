import React from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FloodMonitoring: React.FC = () => {
  // Sample data for water level monitoring
  const waterLevelData = [
    { time: '00:00', level: 1.2, safe: 2.0, warning: 3.0 },
    { time: '04:00', level: 1.5, safe: 2.0, warning: 3.0 },
    { time: '08:00', level: 2.1, safe: 2.0, warning: 3.0 },
    { time: '12:00', level: 2.3, safe: 2.0, warning: 3.0 },
    { time: '16:00', level: 2.5, safe: 2.0, warning: 3.0 },
    { time: '20:00', level: 2.2, safe: 2.0, warning: 3.0 },
    { time: '24:00', level: 1.9, safe: 2.0, warning: 3.0 },
  ];

  // Sample data for rainfall
  const rainfallData = [
    { time: '00:00', rainfall: 0 },
    { time: '04:00', rainfall: 2.5 },
    { time: '08:00', rainfall: 5.2 },
    { time: '12:00', rainfall: 8.1 },
    { time: '16:00', rainfall: 6.3 },
    { time: '20:00', rainfall: 3.7 },
    { time: '24:00', rainfall: 1.2 },
  ];

  // Sample data for sensor status
  const sensorData = [
    { location: 'River Point A', status: 'Active', value: 2.3 },
    { location: 'River Point B', status: 'Active', value: 1.8 },
    { location: 'Dam Outlet', status: 'Active', value: 3.1 },
    { location: 'City Center', status: 'Warning', value: 2.8 },
    { location: 'Upstream', status: 'Active', value: 1.5 },
  ];

  return (
    <div className="flood-monitoring">
      <div className="monitoring-header">
        <h2>Flood Monitoring Dashboard</h2>
        <p>Real-time water level and rainfall monitoring</p>
      </div>

      <div className="charts-grid">
        {/* Water Level Chart */}
        <div className="chart-container">
          <h3>Water Level Monitoring</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={waterLevelData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis label={{ value: 'Water Level (m)', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value, name) => [`${value}m`, name]} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="level" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  name="Current Level"
                />
                <Line 
                  type="monotone" 
                  dataKey="safe" 
                  stroke="#10b981" 
                  strokeDasharray="5 5"
                  name="Safe Level"
                />
                <Line 
                  type="monotone" 
                  dataKey="warning" 
                  stroke="#f59e0b" 
                  strokeDasharray="5 5"
                  name="Warning Level"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Rainfall Chart */}
        <div className="chart-container">
          <h3>Rainfall Data</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={rainfallData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis label={{ value: 'Rainfall (mm)', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value) => [`${value}mm`, 'Rainfall']} />
                <Area 
                  type="monotone" 
                  dataKey="rainfall" 
                  stroke="#0ea5e9" 
                  fill="#0ea5e9" 
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sensor Status Chart */}
        <div className="chart-container full-width">
          <h3>Sensor Network Status</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sensorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="location" />
                <YAxis label={{ value: 'Water Level (m)', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value) => [`${value}m`, 'Water Level']} />
                <Bar 
                  dataKey="value" 
                  fill="#8b5cf6"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="monitoring-stats">
        <div className="stat-item">
          <span className="stat-label">Peak Level Today</span>
          <span className="stat-value">2.5m</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Total Rainfall</span>
          <span className="stat-value">27.0mm</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Active Sensors</span>
          <span className="stat-value">48/50</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Risk Level</span>
          <span className="stat-value warning">Medium</span>
        </div>
      </div>
    </div>
  );
};

export default FloodMonitoring;
import React from 'react';
import { AlertTriangle, CheckCircle, XCircle, Clock, MapPin, Phone } from 'lucide-react';

const AlertsAndWarnings: React.FC = () => {
  const alerts = [
    {
      id: 1,
      type: 'warning',
      level: 'Medium',
      title: 'Rising Water Levels',
      location: 'Downtown District',
      message: 'Water levels are approaching warning thresholds. Residents in low-lying areas should prepare for possible evacuation.',
      timestamp: '2 hours ago',
      status: 'active'
    },
    {
      id: 2,
      type: 'info',
      level: 'Low',
      title: 'Heavy Rain Forecast',
      location: 'City Wide',
      message: 'Heavy rainfall expected in the next 6 hours. Monitor flood conditions closely.',
      timestamp: '30 minutes ago',
      status: 'active'
    },
    {
      id: 3,
      type: 'success',
      level: 'Resolved',
      title: 'Road Closure Lifted',
      location: 'Bridge Street',
      message: 'Flood waters have receded. Bridge Street is now open to traffic.',
      timestamp: '1 hour ago',
      status: 'resolved'
    }
  ];

  const emergencyContacts = [
    { name: 'Emergency Services', number: '911', type: 'emergency' },
    { name: 'Flood Hotline', number: '1-800-FLOOD', type: 'flood' },
    { name: 'City Emergency Management', number: '(555) 123-4567', type: 'management' },
    { name: 'Red Cross Local Chapter', number: '(555) 765-4321', type: 'relief' }
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="alert-icon warning" />;
      case 'error':
        return <XCircle className="alert-icon error" />;
      case 'success':
        return <CheckCircle className="alert-icon success" />;
      default:
        return <AlertTriangle className="alert-icon info" />;
    }
  };

  return (
    <div className="alerts-page">
      <div className="alerts-header">
        <h2>Alerts & Warnings</h2>
        <p>Current flood alerts and emergency information</p>
      </div>

      <div className="alerts-grid">
        {/* Active Alerts */}
        <div className="alerts-section">
          <h3>Active Alerts</h3>
          <div className="alerts-list">
            {alerts.map((alert) => (
              <div key={alert.id} className={`alert-card ${alert.type} ${alert.status}`}>
                <div className="alert-header">
                  {getAlertIcon(alert.type)}
                  <div className="alert-title-section">
                    <h4>{alert.title}</h4>
                    <div className="alert-meta">
                      <span className={`alert-level ${alert.level.toLowerCase()}`}>
                        {alert.level}
                      </span>
                      <span className="alert-location">
                        <MapPin className="location-icon" />
                        {alert.location}
                      </span>
                      <span className="alert-time">
                        <Clock className="time-icon" />
                        {alert.timestamp}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="alert-message">{alert.message}</p>
                {alert.status === 'active' && (
                  <div className="alert-actions">
                    <button className="action-btn primary">View Details</button>
                    <button className="action-btn secondary">Share Alert</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="emergency-section">
          <h3>Emergency Contacts</h3>
          <div className="contacts-list">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className={`contact-card ${contact.type}`}>
                <div className="contact-info">
                  <Phone className="contact-icon" />
                  <div>
                    <h4>{contact.name}</h4>
                    <p className="contact-number">{contact.number}</p>
                  </div>
                </div>
                <button className="call-btn">Call Now</button>
              </div>
            ))}
          </div>

          {/* Safety Guidelines */}
          <div className="safety-guidelines">
            <h4>Flood Safety Guidelines</h4>
            <ul>
              <li>Never drive through flooded roads - "Turn Around, Don't Drown"</li>
              <li>Stay away from storm drains and culverts</li>
              <li>If trapped in a building, go to the highest level</li>
              <li>Listen to emergency broadcasts and follow evacuation orders</li>
              <li>Keep emergency supplies kit ready</li>
              <li>Avoid walking in moving water</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertsAndWarnings;
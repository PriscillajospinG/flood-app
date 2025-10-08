import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('dashboard')

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />
      case 'monitoring':
        return <div className="content-placeholder">Flood Monitoring Charts Coming Soon</div>
      case 'alerts':
        return <div className="content-placeholder">Alerts & Warnings Coming Soon</div>
      case 'chatbot':
        return <div className="content-placeholder">Flood Assistant Chatbot Coming Soon</div>
      case 'emergency':
        return <div className="content-placeholder">Emergency Contacts Coming Soon</div>
      case 'settings':
        return <div className="content-placeholder">Settings Coming Soon</div>
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="app">
      <Header title="Flood Management System" />
      <div className="app-body">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="main-content">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

export default App

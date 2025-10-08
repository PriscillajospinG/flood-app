import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import FloodMonitoring from './components/FloodMonitoring'
import ChatBot from './components/ChatBot'
import AlertsAndWarnings from './components/AlertsAndWarnings'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('dashboard')

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />
      case 'monitoring':
        return <FloodMonitoring />
      case 'alerts':
        return <AlertsAndWarnings />
      case 'chatbot':
        return <ChatBot />
      case 'emergency':
        return <AlertsAndWarnings />
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

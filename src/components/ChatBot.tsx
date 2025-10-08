import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, AlertCircle } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your Flood Management Assistant. I can help you with flood alerts, safety information, emergency contacts, and current water levels. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('flood') && lowerMessage.includes('level')) {
      return "Current flood status: Water level at 2.3m (Medium risk). Safe level is 2.0m. I recommend staying alert and avoiding low-lying areas.";
    }
    
    if (lowerMessage.includes('emergency') || lowerMessage.includes('help')) {
      return "🚨 Emergency Contacts:\n📞 Emergency Services: 911\n🌊 Flood Hotline: 1-800-FLOOD\n🏥 Local Emergency Management: (555) 123-4567\n\nStay safe and evacuate to higher ground if instructed!";
    }
    
    if (lowerMessage.includes('weather') || lowerMessage.includes('rain')) {
      return "Current weather: Moderate rainfall expected. Total rainfall today: 27mm. Heavy rain is forecasted for the next 6 hours. Please monitor flood alerts.";
    }
    
    if (lowerMessage.includes('safe') || lowerMessage.includes('evacuation')) {
      return "Safety Tips:\n• Move to higher ground immediately if flooding occurs\n• Avoid walking or driving through flood water\n• Stay tuned to local emergency broadcasts\n• Keep emergency supplies ready\n• Follow evacuation orders from authorities";
    }
    
    if (lowerMessage.includes('sensor') || lowerMessage.includes('monitor')) {
      return "Sensor Network Status: 48 out of 50 sensors are currently active. All critical monitoring points are operational. Real-time data is being updated every 15 minutes.";
    }
    
    return "I understand you're asking about flood management. I can provide information about current water levels, emergency contacts, safety procedures, weather conditions, and sensor status. Could you please be more specific about what you'd like to know?";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: generateBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What's the current flood risk?",
    "Emergency contacts",
    "Safety guidelines",
    "Weather forecast",
  ];

  return (
    <div className="chatbot">
      <div className="chatbot-header">
        <div className="header-info">
          <Bot className="bot-icon" />
          <div>
            <h2>Flood Assistant</h2>
            <p>AI-powered flood management support</p>
          </div>
        </div>
        <div className="status-indicator">
          <div className="status-dot active"></div>
          <span>Online</span>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender}`}>
            <div className="message-avatar">
              {message.sender === 'user' ? (
                <User className="avatar-icon" />
              ) : (
                <Bot className="avatar-icon" />
              )}
            </div>
            <div className="message-content">
              <div className="message-text">{message.text}</div>
              <div className="message-time">
                {message.timestamp.toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="message bot">
            <div className="message-avatar">
              <Bot className="avatar-icon" />
            </div>
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="quick-questions">
        <p>Quick questions:</p>
        <div className="question-buttons">
          {quickQuestions.map((question, index) => (
            <button
              key={index}
              className="question-btn"
              onClick={() => setInputText(question)}
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      <div className="chat-input">
        <div className="input-container">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about flood conditions, safety tips, or emergency info..."
            className="message-input"
            rows={1}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim() || isTyping}
            className="send-button"
          >
            <Send className="send-icon" />
          </button>
        </div>
      </div>

      <div className="chat-disclaimer">
        <AlertCircle className="disclaimer-icon" />
        <span>This is a demo chatbot. In emergencies, always contact official emergency services.</span>
      </div>
    </div>
  );
};

export default ChatBot;
# Flood Management System

A comprehensive React-based flood management application built with Vite, TypeScript, and modern UI components.

## Features

### 🏠 Dashboard
- Real-time flood statistics and metrics
- Current water level monitoring
- Risk assessment indicators
- Sensor network status

### 📊 Flood Monitoring
- Interactive water level charts with safety thresholds
- Rainfall data visualization
- Sensor network status monitoring
- Real-time data updates

### 🤖 AI Chatbot Assistant
- Intelligent flood management support
- Emergency contact information
- Safety guidelines and tips
- Weather and sensor status queries
- Interactive conversation interface

### 🚨 Alerts & Warnings
- Active flood alerts and warnings
- Emergency contact directory
- Flood safety guidelines
- Real-time alert notifications

## Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Styling**: CSS3 with responsive design
- **State Management**: React Hooks

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/PriscillajospinG/flood-app.git
cd flood-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx           # App header with status indicators
│   ├── Sidebar.tsx          # Navigation sidebar
│   ├── Dashboard.tsx        # Main dashboard view
│   ├── FloodMonitoring.tsx  # Charts and monitoring data
│   ├── ChatBot.tsx          # AI assistant interface
│   └── AlertsAndWarnings.tsx # Alerts and emergency info
├── App.tsx                  # Main application component
├── App.css                  # Application styles
├── index.css                # Global styles
└── main.tsx                 # Application entry point
```

## Features Overview

### Dashboard Components
- **Water Level Tracking**: Current levels with safety thresholds
- **Risk Assessment**: Color-coded risk indicators
- **Sensor Network**: Real-time sensor status monitoring
- **Affected Areas**: Geographic impact tracking

### Visualization Charts
- **Line Charts**: Water level trends over time
- **Area Charts**: Rainfall accumulation data  
- **Bar Charts**: Sensor location status
- **Safety Thresholds**: Visual warning and danger levels

### Chatbot Capabilities
- **Emergency Information**: Quick access to emergency contacts
- **Safety Guidelines**: Flood safety tips and procedures
- **Current Status**: Real-time flood and weather conditions
- **Sensor Data**: Network status and monitoring information

### Alert System
- **Active Alerts**: Current flood warnings and watches
- **Emergency Contacts**: Quick dial emergency services
- **Safety Guidelines**: Comprehensive flood safety information
- **Location-based**: Area-specific alerts and information

## Responsive Design

The application is fully responsive and optimized for:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile devices (320px - 767px)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Features

1. Create new components in `src/components/`
2. Add navigation items in `Sidebar.tsx`
3. Update routing in `App.tsx`
4. Add corresponding styles in `App.css`

## Future Enhancements

- Real-time data integration with flood monitoring APIs
- Push notifications for critical alerts
- GPS-based location services
- Historical data analysis
- Multi-language support
- PWA capabilities for offline access

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Support

For support and questions, please contact the development team or create an issue in the GitHub repository.

---

**Note**: This is a demonstration application. In a production environment, integrate with real flood monitoring APIs and emergency services systems.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

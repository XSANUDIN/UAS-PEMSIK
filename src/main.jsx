import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // Your global styles
import App from './App.jsx';  // Your main App component
import { Provider } from 'react-redux';
import store from './Pages/Redux/Store.jsx';  // Import store (with .js extension for consistency)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  {/* Provide Redux store to the app */}
      <App />
    </Provider>
  </StrictMode>
);

// app/layout.jsx
import './globals.css';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'SnapKart',
  description: 'Your smart shopping app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}

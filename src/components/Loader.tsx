import { useEffect, useState } from 'react';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-wrapper">
      <div className="loader-content">
        <div className="loader-logo">
          <img src="/logo.webp" alt="GMG Solutions" />
          <div className="loader-orbit"></div>
          <div className="loader-orbit orbit-2"></div>
          <div className="loader-orbit orbit-3"></div>
        </div>
        <div className="loader-text">
          <h2>GMG Solutions</h2>
          <div className="loader-bar">
            <div className="loader-progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

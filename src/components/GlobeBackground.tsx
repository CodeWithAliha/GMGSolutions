export default function GlobeBackground() {
  return (
    <div className="globe-container">
      <div className="globe">
        <div className="globe-sphere">
          <div className="globe-grid"></div>
          <div className="globe-dots"></div>
        </div>
      </div>
      <div className="globe-particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

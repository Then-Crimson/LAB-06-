import { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import { pixelArt } from '@dicebear/collection';

function App() {
  const randomSeed = useMemo(() => Math.random().toString(36).substring(2, 15), []);

  const avatar = useMemo(() => {
    return createAvatar(pixelArt, {
      size: 128,
      seed: randomSeed, 
    }).toDataUri();
  }, [randomSeed]);

  const cardStyle: React.CSSProperties = {
    width: '350px',
    height: '400px',
    backgroundColor: '#DEE5D4',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '20px',
  };

  const avatarStyle: React.CSSProperties = {
    borderRadius: '50%',
    marginBottom: '20px',
    width: '128px',
    height: '128px',
    backgroundColor: '#FEF9D9'
  };

  const textStyle: React.CSSProperties = {
    backgroundColor: '#FEF9D9'
  };

  return (
    <div style={cardStyle}>
      <img style={avatarStyle} src={avatar} alt="Avatar" />
      <hr />
      <div style={textStyle}>
        <h2>Random Avatar</h2>
        <p>Este es un avatar generado aleatoriamente usando Dicebear.</p>
      </div>
    </div>
  );
}

export default App;


import React from 'react';
function App() { const stats=[{l:'Premium',v:'80'},{l:'Risk',v:'Med'}]; return <div className='app-shell'><aside className='sidebar'>SafeShift</aside><main><header>Dash</header><div className='stats'>{stats.map(s=><div key={s.l}>{s.l}: {s.v}</div>)}</div></main></div>; }
export default App;

import React, {useState} from 'react';
function App() { const [payout, setPayout] = useState(0); return <div className='app-shell'><aside>SafeShift</aside><main><header>Dash</header><div className='stats'>Payout: {payout}</div><div className='actions'><button onClick={()=>setPayout(p=>p+500)}>Simulate Rain</button></div></main></div>; }
export default App;

import React, {useState} from 'react';
function App() { const [payout, setPayout] = useState(0); const [msg, setMsg] = useState('Ready'); const handleRain=()=>{setPayout(p=>p+500); setMsg('Rain Detected!');}; return <div className='app-shell'><aside>SafeShift</aside><main><div className='stats'>{payout}</div><div className='output'>{msg}</div><div className='actions'><button onClick={handleRain}>Rain</button></div></main></div>; }
export default App;

import React, {useState} from 'react';
function App() { const [payout, setPayout] = useState(0); const [history, setHistory] = useState([]); const handleRain=()=>{setPayout(p=>p+500); setHistory(h=>[...h, 'Rain: 500']);}; return <div className='app-shell'><aside>SafeShift</aside><main><div className='stats'>{payout}</div><div className='history'><ul>{history.map((h,i)=><li key={i}>{h}</li>)}</ul></div><div className='actions'><button onClick={handleRain}>Rain</button></div></main></div>; }
export default App;

import React, {useState} from 'react';
function App() { const [payout, setPayout] = useState(0); const [cooldown, setCooldown] = useState(false); const handleRain=()=>{if(cooldown)return; setPayout(p=>p+500); setCooldown(true);}; return <div className='app-shell'><aside>SafeShift</aside><main><header>Dash</header><div className='stats'>Payout: {payout}</div><div className='actions'><button onClick={handleRain}>Rain</button></div></main></div>; }
export default App;

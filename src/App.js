import React, {useState} from 'react';
function App() { const [active, setActive]=useState(true); return <div className='app-shell'><aside>SafeShift</aside><main><header>Dash</header><div className='stats'>Status: {active?'Active':'Inactive'}</div><div className='actions'><button onClick={()=>setActive(!active)}>Toggle</button></div></main></div>; }
export default App;

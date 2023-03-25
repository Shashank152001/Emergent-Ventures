

function CircularProgress({progress,stroke}) {
    
    return (
      <svg width="50" height="50" >
        <circle cx="25" cy="25" r="15" stroke="#ccc" strokeWidth="4" fill="none" />
        <circle cx="25" cy="25" r="15" stroke={stroke} strokeWidth="4" fill="none"
          style={{
            transform:'rotate(-90deg)',
            transformOrigin:'center',
            strokeLinecap:'round',
            strokeLinejoin:'round'
          }}
          strokeDasharray="252" strokeDashoffset="200"
          >
          
        </circle>
        <text x="25" y="20" textAnchor="middle" dy="8" style={{fontSize:'6px'}}>{progress}</text>
      </svg>
    );
  }
  


export default CircularProgress;

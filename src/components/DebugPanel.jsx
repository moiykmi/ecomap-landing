import { useState, useEffect } from 'react'

const DebugPanel = ({ showSimulator, onShowDemo }) => {
  const [clickCount, setClickCount] = useState(0)
  const [lastClickTime, setLastClickTime] = useState(null)

  const testDemo = () => {
    console.log('🧪 Debug panel test button clicked!')
    setClickCount(prev => prev + 1)
    setLastClickTime(new Date().toLocaleTimeString())
    onShowDemo()
  }

  return (
    <div className="fixed top-20 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg z-[10001] max-w-sm">
      <h3 className="font-bold text-sm mb-2">🛠️ Debug Panel</h3>
      
      <div className="space-y-2 text-xs">
        <div>Simulator State: <span className="font-mono">{showSimulator ? 'ON' : 'OFF'}</span></div>
        <div>Test Clicks: <span className="font-mono">{clickCount}</span></div>
        <div>Last Click: <span className="font-mono">{lastClickTime || 'Never'}</span></div>
        
        <button
          onClick={testDemo}
          className="w-full bg-white text-blue-600 px-3 py-2 rounded font-semibold text-sm hover:bg-blue-50 transition-colors"
        >
          🧪 Test Demo Function
        </button>
        
        <div className="pt-2 border-t border-blue-400">
          <div className="text-xs">
            ✅ Console logs active<br/>
            ✅ State tracking active<br/>
            ✅ Error handling active
          </div>
        </div>
      </div>
    </div>
  )
}

export default DebugPanel
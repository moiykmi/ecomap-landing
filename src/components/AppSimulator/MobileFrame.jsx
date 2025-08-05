const MobileFrame = ({ children }) => {
  return (
    <div className="relative">
      {/* Phone Frame */}
      <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
        <div className="bg-black rounded-[2.5rem] p-1">
          <div className="bg-white rounded-[2rem] overflow-hidden relative" style={{ width: '375px', height: '667px' }}>
            {/* Status Bar */}
            <div className="bg-gray-50 h-6 flex items-center justify-between px-6 text-xs font-medium text-gray-900">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                <span>100%</span>
              </div>
            </div>
            
            {/* App Content */}
            <div className="flex-1 bg-white" style={{ height: 'calc(667px - 24px)' }}>
              {children}
            </div>
          </div>
        </div>
      </div>
      
      {/* Reflection */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-[3rem] pointer-events-none"></div>
    </div>
  )
}

export default MobileFrame
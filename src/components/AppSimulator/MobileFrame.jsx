const MobileFrame = ({ children }) => {
  return (
    <div className="relative">
      {/* Phone Frame */}
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
        {/* Screen Bezel */}
        <div className="bg-black rounded-[2.5rem] p-1">
          {/* Screen */}
          <div className="bg-white rounded-[2rem] overflow-hidden relative" style={{ width: '375px', height: '667px' }}>
            {/* Status Bar */}
            <div className="bg-gray-900 h-6 flex items-center justify-between px-6 text-xs font-medium text-white">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <div className="flex gap-0.5">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                </div>
                <div className="w-6 h-3 bg-green-500 rounded-sm relative">
                  <div className="absolute right-0 w-1 h-1 bg-green-400 rounded-full top-1"></div>
                </div>
              </div>
            </div>
            
            {/* App Content */}
            <div className="flex-1 bg-white" style={{ height: 'calc(667px - 24px)' }}>
              {children}
            </div>
          </div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full"></div>
      </div>
      
      {/* Reflection and shine */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 rounded-[3rem] pointer-events-none"></div>
      
      {/* Floating shadow */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-80 h-20 bg-black/20 rounded-full blur-xl -z-10"></div>
    </div>
  )
}

export default MobileFrame
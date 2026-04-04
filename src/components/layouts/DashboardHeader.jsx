function DashboardHeader() {
  return (
    <div className="col-span-3">
      <header className="flex justify-between items-center py-4 px-8 bg-white border-b border-gray-200 sticky top-0 z-10 h-17.5">
        <div className="font-logo flex items-center gap-2.5 text-blue-700 text-xl font-medium">
            <img src="/money-wallet.png" alt="wallet" width="32" />
            <span>E-Wallet</span>
        </div>
        <div className="relative flex items-center gap-3 cursor-pointer">
            <span className="font-medium text-gray-500 text-sm">Ghaluh Wizard</span>
            <img src="/src/assets/images/Ellipse 185.png" alt="Profile" className="w-9 h-9 rounded-full" />
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 1L7 7L1 1" stroke="#4F5665" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
      </header>
    </div>
  )
}

export default DashboardHeader
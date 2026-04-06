import { usePageTitle } from "@hooks"
import profile from "@/assets/images/Ellipse 185.png"

function LandingPage() {
  usePageTitle("E-Wallet")
  return (
    <div className="min-h-screen bg-slate-50 text-neutral-800 overflow-x-hidden">
      {/* Root Container */}
      {/* 
        #fbfbfc = slate-50
        #222222 = neutral-800
        #2948FF = blue-600
        #7a7a7a = gray-500
        #e5e5e5 = gray-200
        #f3f4f6 = gray-100
        #059669 = emerald-600
        #dc2626 = red-600
        #2a44cc = blue-700
        #f9fafb = gray-50
       */}
      <header className="sticky top-0 z-100 flex items-center justify-between h-14 px-3 py-2 bg-white border-b border-gray-200 sm:h-16 sm:px-4 sm:py-3 md:h-17.5 md:px-8 md:py-4">
        <div className="flex items-center gap-2.5 text-xl font-semibold text-blue-600 font-logo">
          <img src="/money-wallet.png" alt="wallet" width="32" />
          <span>E-Wallet</span>
        </div>
        <div className="relative flex items-center gap-3 cursor-pointer">
          <span className="hidden text-sm font-medium text-gray-500 sm:inline">Ghaluh Wizard</span>
          <img src={profile} alt="Profile" className="w-9 h-9 rounded-full object-cover" />
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1L7 7L1 1" stroke="#4F5665" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </header>

      {/* Layout Wrapper */}
      <div className="grid grid-cols-1 min-h-[calc(100vh-56px)] md:grid-cols-[200px_1fr] md:min-h-[calc(100vh-70px)] lg:grid-cols-[240px_1fr_340px] xl:grid-cols-[260px_1fr_380px] 2xl:grid-cols-[280px_1fr_400px]">
        
        {/* Sidebar */}
        <nav className="hidden flex-col p-8 px-3 bg-slate-50 border-r border-gray-200 md:flex lg:px-4">
          <ul className="flex flex-col gap-2 list-none">
            <li>
              <a href="./dashboard.html" className="flex items-center gap-4 px-5 py-3.5 rounded-lg font-medium bg-blue-600 text-white transition-all duration-200">
                <img src="/assets/icons/dashboard-two.svg" alt="Dashboard Icon" className="w-5 h-5" /> Dashboard
              </a>
            </li>
            <li>
              <a href="./transfer.html" className="flex items-center gap-4 px-5 py-3.5 rounded-lg font-medium text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-neutral-800">
                <img src="/assets/icons/Send.svg" alt="Transfer Icon" className="w-5 h-5" /> Transfer
              </a>
            </li>
            <li>
              <a href="./history.html" className="flex items-center gap-4 px-5 py-3.5 rounded-lg font-medium text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-neutral-800">
                <img src="/assets/icons/history.svg" alt="History Icon" className="w-5 h-5" /> History
              </a>
            </li>
            <li>
              <a href="./top-up.html" className="flex items-center gap-4 px-5 py-3.5 rounded-lg font-medium text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-neutral-800">
                <img src="/assets/icons/Upload.svg" alt="Top Up Icon" className="w-5 h-5" /> Top Up
              </a>
            </li>
            <li>
              <a href="./profile.html" className="flex items-center gap-4 px-5 py-3.5 rounded-lg font-medium text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-neutral-800">
                <img src="/assets/icons/2 User.svg" alt="Profile Icon" className="w-5 h-5" /> Profile
              </a>
            </li>
            <li>
              <a href="./login.html" className="flex items-center gap-4 px-5 py-3.5 rounded-lg font-medium text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-neutral-800">
                <img src="/assets/icons/exit.svg" alt="Exit Icon" className="w-5 h-5" /> Keluar
              </a>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex flex-col gap-4 p-3 sm:p-6 sm:gap-6 md:p-8 xl:p-10 2xl:p-12">
          
          <section>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col gap-3 p-4 bg-white border border-gray-200 sm:p-6">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                  <div className="text-xl text-blue-600">
                    <img src="/assets/icons/balance.svg" alt="Balance Icon" />
                  </div>
                  <span>Balance</span>
                </div>
                <h2 className="text-lg font-semibold sm:text-2xl">Rp.120.000</h2>
                <p className="flex items-center gap-1 text-sm font-medium text-emerald-600">
                  +2% <img src="/assets/icons/stonk.svg" alt="" /> <span className="ml-1 text-gray-500">3 Days Ago</span>
                </p>
              </div>
              
              <div className="flex flex-col gap-3 p-4 bg-white border border-gray-200 sm:p-6">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                  <div className="text-xl text-blue-600">
                    <img src="/assets/icons/income.svg" alt="Income Icon" />
                  </div>
                  <span>Income</span>
                </div>
                <h2 className="text-lg font-semibold sm:text-2xl">Rp2.120.000</h2>
                <p className="flex items-center gap-1 text-sm font-medium text-emerald-600">
                  +11.01% <img src="/assets/icons/stonk.svg" alt="" />
                </p>
              </div>

              <div className="flex flex-col gap-3 p-4 bg-white border border-gray-200 sm:p-6">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                  <div className="text-xl text-blue-600">
                    <img src="/assets/icons/expense.svg" alt="Expense Icon" />
                  </div>
                  <span>Expense</span>
                </div>
                <h2 className="text-lg font-semibold sm:text-2xl">Rp.200.000</h2>
                <p className="flex items-center gap-1 text-sm font-medium text-red-600">
                  -5.06% <img src="/assets/icons/not-stonk.svg" alt="" />
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex flex-col items-start gap-4 p-5 bg-white border border-gray-200 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <h3 className="text-lg font-semibold">Fast Service</h3>
              <div className="flex flex-col w-full gap-4 sm:flex-row sm:w-auto">
                <a className="inline-flex items-center justify-center gap-2 px-8 py-3 text-white transition-all bg-blue-600 rounded-lg sm:w-auto hover:bg-blue-700 font-medium" href="./top-up.html">
                  <img src="/assets/icons/u_money-insert.svg" alt="" /> Top Up
                </a>
                <a className="inline-flex items-center justify-center gap-2 px-8 py-3 text-white transition-all bg-blue-600 rounded-lg sm:w-auto hover:bg-blue-700 font-medium" href="./transfer.html">
                  <img src="/assets/icons/send-white.svg" alt="" /> Transfer
                </a>
              </div>
            </div>
          </section>

          <section className="flex-grow">
            <div className="flex flex-col gap-4 p-4 bg-white border border-gray-200 sm:p-6">
              <div className="flex flex-col items-start gap-3 mb-8 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold">Income Chart</h3>
                <div className="flex gap-3">
                  <select className="px-3 py-1.5 text-sm text-neutral-800 bg-gray-50 border border-gray-200 rounded-md outline-none cursor-pointer">
                    <option>7 Days</option>
                  </select>
                  <select className="px-3 py-1.5 text-sm text-neutral-800 bg-gray-50 border border-gray-200 rounded-md outline-none cursor-pointer">
                    <option>Income</option>
                  </select>
                </div>
              </div>
              
              <div className="relative flex h-[200px] gap-4 sm:h-[300px]">
                <img src="/assets/images/Chart.png" alt="Income Chart" className="object-cover w-full h-full" />
              </div>
            </div>
          </section>

        </main>

        {/* Right Panel */}
        <aside className="px-4 pb-6 md:col-start-2 md:px-8 md:pb-8 lg:col-auto lg:p-8 lg:pl-0 xl:p-8 xl:pl-0">
          <div className="h-full p-4 bg-white border border-gray-200 sm:p-6">
            <div className="flex flex-col items-start gap-2 mb-6 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-semibold">Transaction History</h3>
              <a href="./history.html" className="text-sm font-medium text-blue-600">See All</a>
            </div>
            
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img src="/assets/images/dashboard/robert-fox.png" alt="Robert Fox" className="w-10 h-10 object-cover rounded-xl" />
                <div className="flex-grow">
                  <h4 className="text-base font-semibold text-neutral-800">Robert Fox</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Transfer</p>
                </div>
                <div className="text-sm font-semibold text-emerald-600">+Rp50.000</div>
              </div>

              <div className="flex items-center gap-4">
                <img src="/assets/images/dashboard/floyd-miles.png" alt="Floyd Miles" className="w-10 h-10 object-cover rounded-xl" />
                <div className="flex-grow">
                  <h4 className="text-base font-semibold text-neutral-800">Floyd Miles</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Send</p>
                </div>
                <div className="text-sm font-semibold text-red-600">-Rp50.000</div>
              </div>

              <div className="flex items-center gap-4">
                <img src="/assets/images/dashboard/ujang.png" alt="Ujang" className="w-10 h-10 object-cover rounded-xl" />
                <div className="flex-grow">
                  <h4 className="text-base font-semibold text-neutral-800">Ujang</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Send</p>
                </div>
                <div className="text-sm font-semibold text-red-600">-Rp50.000</div>
              </div>

              <div className="flex items-center gap-4">
                <img src="/assets/images/dashboard/raulemons.png" alt="Raulemons" className="w-10 h-10 object-cover rounded-xl" />
                <div className="flex-grow">
                  <h4 className="text-base font-semibold text-neutral-800">Raulemons</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Transfer</p>
                </div>
                <div className="text-sm font-semibold text-emerald-600">+Rp50.000</div>
              </div>

              <div className="flex items-center gap-4">
                <img src="/assets/images/dashboard/reiva.png" alt="Reiva" className="w-10 h-10 object-cover rounded-xl" />
                <div className="flex-grow">
                  <h4 className="text-base font-semibold text-neutral-800">Reiva</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Transfer</p>
                </div>
                <div className="text-sm font-semibold text-emerald-600">+Rp50.000</div>
              </div>

              <div className="flex items-center gap-4">
                <img src="/assets/images/dashboard/thobie.png" alt="Thobie" className="w-10 h-10 object-cover rounded-xl" />
                <div className="flex-grow">
                  <h4 className="text-base font-semibold text-neutral-800">Thobie</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Send</p>
                </div>
                <div className="text-sm font-semibold text-red-600">-Rp50.000</div>
              </div>

              <div className="flex items-center gap-4">
                <img src="/assets/images/dashboard/buzjany.png" alt="Buzjany" className="w-10 h-10 object-cover rounded-xl" />
                <div className="flex-grow">
                  <h4 className="text-base font-semibold text-neutral-800">Buzjany</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Transfer</p>
                </div>
                <div className="text-sm font-semibold text-emerald-600">+Rp50.000</div>
              </div>

              <div className="flex items-center gap-4">
                <img src="/assets/images/dashboard/adisurya.png" alt="Adisurya" className="w-10 h-10 object-cover rounded-xl" />
                <div className="flex-grow">
                  <h4 className="text-base font-semibold text-neutral-800">Adisurya</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Send</p>
                </div>
                <div className="text-sm font-semibold text-red-600">-Rp50.000</div>
              </div>

              <div className="flex items-center gap-4">
                <img src="/assets/images/dashboard/miguelle.png" alt="Miguelle" className="w-10 h-10 object-cover rounded-xl" />
                <div className="flex-grow">
                  <h4 className="text-base font-semibold text-neutral-800">Miguelle</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Transfer</p>
                </div>
                <div className="text-sm font-semibold text-emerald-600">+Rp50.000</div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default LandingPage
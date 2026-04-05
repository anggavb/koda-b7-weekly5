import { usePageTitle } from "@hooks"

function Dashboard() {
  usePageTitle("Dashboard")
  return (
    <>
      <div className="bg-amber-300">Dashboard Content</div>
      <div className="bg-blue-300">Dashboard Aside</div>
    </>
  )
}

export default Dashboard
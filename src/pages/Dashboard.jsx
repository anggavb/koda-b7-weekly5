import { usePageTitle, useRootAddClass } from "../hooks"
import { DashboardMenu, DashboardHeader } from "../components/layouts"

function Dashboard() {
  usePageTitle("Dashboard")
  useRootAddClass(["grid", "grid-cols-3"])
  return (
    <>
      <DashboardHeader />
      <DashboardMenu />
      <div>Dashboard Content</div>
    </>
  )
}

export default Dashboard
import { Outlet } from "react-router"
import { useRootAddClass } from "@hooks"
import { DashboardMenu, DashboardHeader } from "@components/layouts"

function Dashboard() {
  useRootAddClass(["grid", "grid-cols-[280px_1fr_400px]"])
  return (
    <>
      <DashboardHeader />
      <DashboardMenu />
      <Outlet />
      <div className="bg-blue-300">Dashboard Aside</div>
    </>
  )
}

export default Dashboard
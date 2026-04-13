import './Dashboard.css';
import { NavLink, Outlet } from 'react-router';
const Dashboard = () => {
  return (
    <div className="Dashboard flex min-h-screen">
      <aside className='w-64 bg-amber-950 text-white p-6 space-y-4'>
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className='flex flex-col space-y-2'>
          
          <NavLink to="overview" className={({ isActive }) => (isActive ? 'bg-white text-green-400 px-4 py-2 rounded font-semibold' : "hover:bg-green-600 px-4 py-2 rounded")} >OverView</NavLink>
          <NavLink to="settings" className={({ isActive }) => (isActive ? 'bg-white text-green-400 px-4 py-2 rounded font-semibold' : "hover:bg-green-600 px-4 py-2 rounded")} >Settings</NavLink>
          <NavLink to="users" className={({ isActive }) => (isActive ? 'bg-white text-green-400 px-4 py-2 rounded font-semibold' : "hover:bg-green-600 px-4 py-2 rounded")} >Users</NavLink>
        </nav>
      </aside>
         <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
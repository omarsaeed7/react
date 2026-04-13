

function Navbar() {

  return (
 
      <nav>
        <ul className="flex gap-[14px] px-3 text-2xl bg-red-200 text-white capitalize">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/docs">Docs</a>
          </li>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
        </ul>
      </nav>

  )
}

export default Navbar

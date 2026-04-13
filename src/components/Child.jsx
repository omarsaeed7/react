

function Child({userName, displayAlert}) {

  return (
    <>
      <div>Child UserName {userName}
        <button onClick={displayAlert} className="btn border bg-sky-300">Click me</button>
      </div>
    </>
  )
}

export default Child

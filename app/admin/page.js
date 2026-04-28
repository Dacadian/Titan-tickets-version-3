export default function Admin() {
  return (
    <main>
      <h1 style={{fontSize:'3rem', textAlign:'center', color:'#f97316'}}>
        Admin Dashboard ✅
      </h1>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))', gap:'2rem', marginTop:'2rem'}}>
        <div style={{background:'rgba(255,255,255,0.1)', padding:'2rem', borderRadius:'1rem', textAlign:'center'}}>
          <div style={{fontSize:'4rem'}}>🎫</div>
          <h3 style={{color:'#f97316', margin:'0.5rem 0'}}>12 Events</h3>
          <p>Active listings</p>
        </div>
        <div style={{background:'rgba(255,255,255,0.1)', padding:'2rem', borderRadius:'1rem', textAlign:'center'}}>
          <div style={{fontSize:'4rem'}}>💰</div>
          <h3 style={{color:'#f97316', margin:'0.5rem 0'}}>KSh 2.5M</h3>
          <p>Total Revenue</p>
        </div>
      </div>
    </main>
  )
}

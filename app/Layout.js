export default function Layout({ children }) {
  return (
    <html>
      <body style={{margin:0, padding:'2rem', background:'black', color:'white'}}>
        <h2 style={{textAlign:'center', color:'#f97316'}}>Titan Tickets Layout</h2>
        {children}
      </body>
    </html>
  )
}

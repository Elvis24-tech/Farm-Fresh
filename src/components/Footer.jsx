export default function Footer() {
    return (
      <footer>
        <div style={{maxWidth:1120, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'2rem'}}>
          <div>
            <h3>Farmart</h3>
            <p>Connecting farmers and buyers directly for a better future.</p>
          </div>
          <div><h3>For Buyers</h3><ul><li><a href="#">Browse Animals</a></li><li><a href="#">Search Farmers</a></li><li><a href="#">How it Works</a></li></ul></div>
          <div><h3>For Farmers</h3><ul><li><a href="#">Sell Animals</a></li><li><a href="#">Dashboard</a></li><li><a href="#">Success Stories</a></li></ul></div>
          <div><h3>Support</h3><ul><li><a href="#">Help Center</a></li><li><a href="#">Contact Us</a></li><li><a href="#">Terms of Service</a></li></ul></div>
        </div>
        <div className="bottom">&copy; 2025 Farmart. All rights reserved.</div>
      </footer>
    );
  }
  
import Navbar from '../Navbar/Navbar'; // adjust path if needed

function MainPage() {
  const username = 'dimitrios2026'; // hardcoded for now

  return (
    <div>
      <Navbar username={username} />
      <h2>Available Gifts</h2>
      <ul>
        <li>Wireless Headphones</li>
        <li>Smart Mug</li>
        <li>Travel Journal</li>
      </ul>
    </div>
  );
}

export default MainPage;

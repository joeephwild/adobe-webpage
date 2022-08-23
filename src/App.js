
import './App.css';
import Banner from './components/Banner';
import Card from './components/Card';
import card1 from './images/card1.jpeg'
import card2 from './images/card2.jpeg'
import Navbar from './components/Navbar';
function App() {
  return (
    <div> <Navbar />
      <Banner />
      <Card heading='Meet the new Photoshop.' text='Faster, smarter, and easier than ever.' link='Get to Know photoshop' image={card1}/>
        <Card heading='Adobe Express' text='Quickly and easily make standout content. No credit card required.' link='Get Adobe Express free' image={card2}/>
      
    </div>
  );
}

export default App;

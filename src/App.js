import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import data from './data/berlin.json';
import Greetings from './components/Greetings';
import Random from './components/Random';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import { LikeButton, BoxColor } from './components'
import { Rating2 } from './components/Rating2';


function App() {

  return (
    <div className="App">
      <h1>Iteration 1</h1>
      <h2>IdCards</h2>
      <div className='cards-container'>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='non-binary'
          height={178}
          birth={new Date("1992-07-14").toDateString() /* TO DATE STRING is a method to convert it to string and make it visible in html*/}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11").toDateString()}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <h1>Iteration 2</h1>

      <div>
        <h2>Greetings</h2>
        <Greetings lang="de">Anna</Greetings>
        <Greetings lang="fr">Julie</Greetings>
        <Greetings lang="es">Alex</Greetings>
      </div>

      <h1>Iteration 3</h1>

      <div>
        <h2>Random values</h2>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>

      <h1>Iteration 4</h1>

      <div>
        <h2>BoxColor</h2>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

      <h1>Iteration 5</h1>

      <div>
        <h2>CreditCard</h2>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>

      <h2>Iteration 6</h2>

      <h2>Rating</h2>
      <div>
        <Rating rating={0} />
        <Rating rating={1.49} />
        <Rating rating={1.5} />
        <Rating rating={3} />
        <Rating rating={4} />
        <Rating rating={5} />
      </div>

      <h2>Iteration 6 with children</h2>
      <Rating2>0</Rating2>
      <Rating2>1.49</Rating2>
      <Rating2>1.5</Rating2>
      <Rating2>3</Rating2>
      <Rating2>4</Rating2>
      <Rating2>5</Rating2>
      <LikeButton />
      <LikeButton />
    </div>
  );
}

export default App;
import { useState } from 'react';
import './App.css';
import Header from './Component/Header';
import PhoneCard from './Component/PhoneCard';

function App() {

  const [PhoneDetails, setPhoneDetails] = useState([
    {
      img: 'https://www.course-api.com/images/cart/phone-1.png',
      name: 'Samsung Galaxy S8',
      price: 799.99,
      items: 0,  
    },
    {
      img: 'https://www.course-api.com/images/cart/phone-2.png',
      name: 'Google pixel',
      price: 499.99,
      items: 0,  
    },
    {
      img: 'https://www.course-api.com/images/cart/phone-3.png',
      name: 'Xaomi Redmi Note 2',
      price: 699.99,
      items: 0,  
    },
    {
      img: 'https://www.course-api.com/images/cart/phone-4.png',
      name: 'Samsung Galaxy S7',
      price: 599.99,
      items: 0,  
    },
  ]);

  // Function to increase items for a specific phone
  const increaseItems = (index) => {
    const newPhoneDetails = [...PhoneDetails];
    newPhoneDetails[index].items += 1;  
    setPhoneDetails(newPhoneDetails);   
  };

  // Function to decrease items for a specific phone
  const decreaseItems = (index) => {
    const newPhoneDetails = [...PhoneDetails];
    if (newPhoneDetails[index].items > 0) {
      newPhoneDetails[index].items -= 1;  
      setPhoneDetails(newPhoneDetails);   
    }
  };

  // Calculate total cost
  const total = PhoneDetails.reduce((acc, phone) => {
    return acc + (phone.price * phone.items);
  }, 0);

  // Calculate total number of items in the cart
  const totalItems = PhoneDetails.reduce((acc, phone) => acc + phone.items, 0);

  return (
    <>
      <Header items={totalItems} />  {/* Pass totalItems as a prop to Header */}
      <br />
      <br />
      <h1>YOUR BAG</h1>
      <br />
      <div className="CardsContainer">
        {PhoneDetails.map((phone, index) => (
          <PhoneCard
            key={`Phone` + index}
            img={phone.img}
            name={phone.name}
            price={phone.price}
            items={phone.items}
            increaseItems={() => increaseItems(index)}  
            decreaseItems={() => decreaseItems(index)}  
          />
        ))}
      </div>
      <h2 className='mx-auto'>Cart Total: ${total.toFixed(2)} </h2>
    </>
  );
}

export default App;

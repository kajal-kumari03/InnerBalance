import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QRCode from 'react-qr-code';
import axios from 'axios';
import '../Payment.css'; // Import your custom CSS for styling

const Payment = () => {
  const { petId } = useParams(); // Get petId from URL params
  const [pet, setPet] = useState(null);
  const [showQRCode, setShowQRCode] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState('');

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const petId = JSON.parse(localStorage.getItem('petId'));
        const response = await axios.get(`https://panasonic-pioneers-062.onrender.com/pets/${petId}`);
        setPet(response.data[0]); // Assuming response.data is an object with pet details
        // console.log("response :",response);
      } catch (err) {
        console.error('Error fetching pet details:', err);
      }
    };
    fetchPetDetails();
  }, [petId]);

  const handleProceedPayment = () => {
    // Construct the payment URL for PhonePe
    const phonePeUrl = `https://googlepay.com/pay?amount=${100}&merchantId=${'rakeshgowda495758-2@oksbi'}`;
    setPaymentUrl(phonePeUrl);
    setShowQRCode(true);
  };

  if (!pet) return <p>Loading...</p>;

  return (
    <div className="payment-container payment-main">
      <h2>Payment Details</h2>
      <div className="pet-details payment-pet-details">
        <div className="pet-image payment-pet-image">
          <img src={`https://panasonic-pioneers-062.onrender.com/${pet.photos[0]}`} alt={pet.name} />
        </div>
        <div className="pet-info payment-pet-info">
          <h3>{pet.name}</h3>
          <p>Type: {pet.type}</p>
          <p>Breed: {pet.breed}</p>
          <p>Age: {pet.age}</p>
          <p>Owner: {pet.owner}</p>
          <p>Description: {pet.description}</p>
        </div>
        <div className="payment-actions payment-payment-actions">
          <button className="proceed-button payment-proceed-button" onClick={handleProceedPayment}>
            Proceed with Payment
          </button>
          {showQRCode && (
            <div className="payment-qr-code">
              <QRCode value={paymentUrl} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;
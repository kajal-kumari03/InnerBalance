// // src/pages/ClientDashboard.tsx

// import React, { useEffect, useState } from 'react';
// import './ClientDashboard.css';

// interface Professor {
//   _id: string;
//   name: string;
//   phoneNumber: string;
//   whatsappNumber: string;
//   email: string;
//   educationDetails: string;
//   experience: string;
//   address: string;
//   pricePerSession: string;
//   status: string;
// }

// const ClientDashboard = () => {
//   const [professors, setProfessors] = useState<Professor[ ]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfessors = async () => {
//       try {
//         const res = await fetch('https://your-backend-url/api/professors/approved');
//         const data = await res.json();
//         setProfessors(data);
//       } catch (err) {
//         console.error('Error fetching professors:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfessors();
//   }, []);

//   return (
//     <div className="client-dashboard">
//       <h2>Meet Our  Specialists</h2>
//       {loading ? (
//         <p>Loading specialists...</p>
//       ) : (
//         <div className="professor-list">
//           {professors.map((prof) => (
//             <div key={prof._id} className="professor-card">
//               <h3>{prof.name}</h3>
//               <p><strong>Email:</strong> {prof.email}</p>
//               <p><strong>Phone:</strong> {prof.phoneNumber}</p>
//               {prof.whatsappNumber && <p><strong>WhatsApp:</strong> {prof.whatsappNumber}</p>}
//               <p><strong>Education:</strong> {prof.educationDetails}</p>
//               <p><strong>Experience:</strong> {prof.experience}</p>
//               <p><strong>Address:</strong> {prof.address}</p>
//               <p><strong>Price/Session:</strong> ₹{prof.pricePerSession}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ClientDashboard;


import React, { useEffect, useState } from 'react';
import Header from "../components/Hearder";
import  Footer from "../components/Footer";  


interface Professor {
  _id: string;
  name: string;
  phoneNumber: string;
  whatsappNumber: string;
  email: string;
  educationDetails: string;
  experience: string;
  address: string;
  pricePerSession: string;
  status: string;
}

const ClientDashboard = () => {
  const [professors, setProfessors] = useState<Professor[]>([
    {
      _id: '1',
      name: 'Dr. John Doe',
      phoneNumber: '123-456-7890',
      whatsappNumber: '123-456-7890',
      email: 'john.doe@example.com',
      educationDetails: 'Ph.D. in Psychology',
      experience: '10 years',
      address: '123 Main Street, City, Country',
      pricePerSession: '5000',
      status: 'Approved'
    },
    {
      _id: '2',
      name: 'Dr. Jane Smith',
      phoneNumber: '098-765-4321',
      whatsappNumber: '098-765-4321',
      email: 'jane.smith@example.com',
      educationDetails: 'M.Sc. in Counseling',
      experience: '8 years',
      address: '456 Elm Street, City, Country',
      pricePerSession: '4000',
      status: 'Approved'
    },
    {
      _id: '3',
      name: 'Dr. Emma Brown',
      phoneNumber: '321-654-9870',
      whatsappNumber: '321-654-9870',
      email: 'emma.brown@example.com',
      educationDetails: 'Master in Clinical Psychology',
      experience: '6 years',
      address: '789 Oak Street, City, Country',
      pricePerSession: '4500',
      status: 'Approved'
    }
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfessors = async () => {
      try {
        const res = await fetch('https://your-backend-url/api/professors/approved');
        const data = await res.json();
        setProfessors(data);
      } catch (err) {
        console.error('Error fetching professors:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfessors();
  }, []);

  return (
    <>
    <Header /> 
       <div className="client-dashboard">
      <h2>Meet Our Specialists</h2>
      {loading ? (
        <p>Loading specialists...</p>
      ) : (
        <div className="professor-list">
          {professors.map((prof) => (
            <div key={prof._id} className="professor-card">
              <h3>{prof.name}</h3>
              <p><strong>Email:</strong> {prof.email}</p>
              <p><strong>Phone:</strong> {prof.phoneNumber}</p>
              {prof.whatsappNumber && <p><strong>WhatsApp:</strong> {prof.whatsappNumber}</p>}
              <p><strong>Education:</strong> {prof.educationDetails}</p>
              <p><strong>Experience:</strong> {prof.experience}</p>
              <p><strong>Address:</strong> {prof.address}</p>
              <p><strong>Price/Session:</strong> ₹{prof.pricePerSession}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer />
    </>
  );
};

export default ClientDashboard;

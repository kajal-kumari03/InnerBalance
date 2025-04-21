import React, { useEffect, useState } from 'react';
import './SpecialistDashboard.css';

interface Appointment {
  id: string;
  clientName: string;
  date: string;
  time: string;
  status: string;
}

interface SpecialistProfile {
  name: string;
  email: string;
  phoneNumber: string;
  educationDetails: string;
  experience: string;
  address: string;
  pricePerSession: string;
}

const SpecialistDashboard = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [profile, setProfile] = useState<SpecialistProfile | null>(null);

  useEffect(() => {
    // Simulated fetch – replace with real API
    const sampleAppointments: Appointment[] = [
      {
        id: 'a1',
        clientName: 'Alice Johnson',
        date: '2025-04-20',
        time: '10:00 AM',
        status: 'Upcoming',
      },
      {
        id: 'a2',
        clientName: 'Bob Smith',
        date: '2025-04-21',
        time: '02:00 PM',
        status: 'Upcoming',
      },
    ];

    const specialistData: SpecialistProfile = {
      name: 'Dr. John Doe',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
      educationDetails: 'Ph.D. in Clinical Psychology',
      experience: '10 years',
      address: '123 Main Street, City, Country',
      pricePerSession: '5000',
    };

    setTimeout(() => {
      setAppointments(sampleAppointments);
      setProfile(specialistData);
    }, 1000);
  }, []);

  return (
    <div className="specialist-dashboard">
      <h2>Welcome, {profile?.name}</h2>

      <section className="profile-section">
        <h3>Your Profile</h3>
        {profile ? (
          <div className="profile-card">
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Phone:</strong> {profile.phoneNumber}</p>
            <p><strong>Education:</strong> {profile.educationDetails}</p>
            <p><strong>Experience:</strong> {profile.experience}</p>
            <p><strong>Address:</strong> {profile.address}</p>
            <p><strong>Price/Session:</strong> ₹{profile.pricePerSession}</p>
          </div>
        ) : (
          <p>Loading profile...</p>
        )}
      </section>

      <section className="appointments-section">
        <h3>Upcoming Appointments</h3>
        {appointments.length === 0 ? (
          <p>No appointments yet.</p>
        ) : (
          <ul className="appointments-list">
            {appointments.map((appt) => (
              <li key={appt.id} className="appointment-card">
                <p><strong>Client:</strong> {appt.clientName}</p>
                <p><strong>Date:</strong> {appt.date}</p>
                <p><strong>Time:</strong> {appt.time}</p>
                <p><strong>Status:</strong> {appt.status}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default SpecialistDashboard;


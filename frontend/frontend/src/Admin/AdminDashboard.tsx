import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';

interface Specialist {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  status: 'pending' | 'approved' | 'rejected';
}

interface Client {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
}

interface Connection {
  clientId: string;
  specialistId: string;
}

const AdminDashboard = () => {
  const [specialists, setSpecialists] = useState<Specialist[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        // Dummy Data for testing
        const dummySpecialists: Specialist[] = [
          { _id: 's1', name: 'Dr. Aisha Khan', email: 'aisha@example.com', phoneNumber: '9876543210', status: 'approved' },
          { _id: 's2', name: 'Dr. Raj Malhotra', email: 'raj@example.com', phoneNumber: '9876543211', status: 'approved' },
        ];

        const dummyClients: Client[] = [
          { _id: 'c1', name: 'Riya Sharma', email: 'riya@example.com', phoneNumber: '9871234560' },
          { _id: 'c2', name: 'Aman Gupta', email: 'aman@example.com', phoneNumber: '9823456789' },
          { _id: 'c3', name: 'Neha Verma', email: 'neha@example.com', phoneNumber: '9870001122' },
        ];

        const dummyConnections: Connection[] = [
          { clientId: 'c1', specialistId: 's1' },
          { clientId: 'c2', specialistId: 's2' },
          { clientId: 'c3', specialistId: 's1' },
        ];

        setTimeout(() => {
          setSpecialists(dummySpecialists);
          setClients(dummyClients);
          setConnections(dummyConnections);
          setLoading(false);
        }, 1000);
      } catch (err) {
        console.error('Error fetching admin data:', err);
        setLoading(false);
      }
    };

    fetchAdminData();
  }, []);

  const getClientsForSpecialist = (specId: string) => {
    const connectedClients = connections
      .filter((conn) => conn.specialistId === specId)
      .map((conn) => clients.find((c) => c._id === conn.clientId))
      .filter(Boolean) as Client[];

    return connectedClients;
  };

  const getSpecialistForClient = (clientId: string) => {
    const conn = connections.find((c) => c.clientId === clientId);
    if (!conn) return null;
    return specialists.find((s) => s._id === conn.specialistId);
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <>
          {/* Specialist to Clients */}
          <div className="connection-table">
            <h3>Specialist → Clients</h3>
            {specialists.map((spec) => (
              <div key={spec._id} className="connection-card">
                <h4>{spec.name}</h4>
                <ul>
                  {getClientsForSpecialist(spec._id).length > 0 ? (
                    getClientsForSpecialist(spec._id).map((client) => (
                      <li key={client._id}>
                        {client.name} ({client.email})
                      </li>
                    ))
                  ) : (
                    <li>No clients assigned.</li>
                  )}
                </ul>
              </div>
            ))}
          </div>

          {/* Client to Specialist */}
          <div className="connection-table">
            <h3>Client → Specialist</h3>
            {clients.map((client) => {
              const specialist = getSpecialistForClient(client._id);
              return (
                <div key={client._id} className="connection-card">
                  <h4>{client.name}</h4>
                  <p>
                    Assigned to:{' '}
                    {specialist ? (
                      <strong>{specialist.name}</strong>
                    ) : (
                      'No specialist assigned'
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;

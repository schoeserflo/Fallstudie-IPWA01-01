import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

function Tabelle() {
  const [data, setData] = useState([
    { id: 1, name: "USA", emissions: 5000, country: "" },
    { id: 2, name: "China", emissions: 9000, country: "" },
    { id: 3, name: "Deutschland", emissions: 800, country: "" },
    { id: 4, name: "Japan", emissions: 1100, country: "" },
    { id: 5, name: "Indien", emissions: 2200, country: "" },
    { id: 6, name: "Brasilien", emissions: 900, country: "" },
    { id: 7, name: "Russland", emissions: 1600, country: "" },
    { id: 8, name: "Frankreich", emissions: 350, country: "" },
    { id: 9, name: "Kanada", emissions: 600, country: "" },
    { id: 10, name: "Südkorea", emissions: 500, country: "" },
    { id: 11, name: "Global Oil Corp.", emissions: 300, country: "USA" },
    { id: 12, name: "Worldwide Mining Co.", emissions: 250, country: "Russland" },
    { id: 13, name: "AutoMacher AG", emissions: 150, country: "Deutschland" },
    { id: 14, name: "TechGlobal Ltd.", emissions: 100, country: "Südkorea" },
    { id: 15, name: "EcoEnergy Solutions", emissions: 120, country: "Brasilien" },
    { id: 16, name: "SteelPro Industries", emissions: 400, country: "China" },
    { id: 17, name: "EuroChemicals", emissions: 200, country: "Frankreich" },
    { id: 18, name: "AgriFood", emissions: 80, country: "Indien" },
    { id: 19, name: "Northern Timber", emissions: 70, country: "Kanada" },
    { id: 20, name: "Rapid Construction Group", emissions: 220, country: "Russland" },
    { id: 21, name: "LuxAutoDesigns", emissions: 60, country: "Japan" },
    { id: 22, name: "SolarTech Innovations", emissions: 20, country: "USA" },
    { id: 23, name: "NextGen Electronics", emissions: 90, country: "China" },
    { id: 24, name: "SteelPro Industries", emissions: 400, country: "Kanada" },
    { id: 25, name: "Global Freight Systems", emissions: 150, country: "Indien" }
  ]);
  const [filterCountry, setFilterCountry] = useState('');
  const [filterCompany, setFilterCompany] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [sortField, setSortField] = useState('id'); // Standardmäßig nach 'id' sortieren

  const filteredData = data.filter(item => {
    if (filterCountry === 'Nur Länder') {
      return item.country === '';
    } else if (filterCountry === 'Nur Unternehmen') {
      return item.country !== '';
    } else if (filterCountry === 'Andere') {
      return item.country !== '' && !['USA', 'Deutschland', 'China'].includes(item.country);
    } else {
      return (filterCountry === '' || item.country === filterCountry) &&
             (filterCompany === '' || item.name.includes(filterCompany));
    }
  });
  const handleSort = (field) => {
    const sortedData = [...data].sort((a, b) => {
      if (a[field] < b[field]) return sortDirection === 'asc' ? -1 : 1;
      if (a[field] > b[field]) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
    setData(sortedData);
    setSortField(field);
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="filterCountry">
          <Form.Label>Land:</Form.Label>
          <Form.Control as="select" value={filterCountry} onChange={e => setFilterCountry(e.target.value)}>
            <option value="">Alle</option>
            <option value="Nur Länder">Nur Länder</option>
            <option value="Nur Unternehmen">Nur Unternehmen</option>
            <option value="USA">USA</option>
            <option value="Deutschland">Deutschland</option>
            <option value="China">China</option>
            
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="filterCompany">
          <Form.Label>Unternehmen:</Form.Label>
          <Form.Control type="text" placeholder="Suche nach Unternehmen" value={filterCompany} onChange={e => setFilterCompany(e.target.value)} />
        </Form.Group>
      </Form>
      <Table striped>
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>Nr {sortField === 'id' && (sortDirection === 'asc' ? '↓' : '↑')}</th>
            <th onClick={() => handleSort('name')}>Land/Unternehmen {sortField === 'name' && (sortDirection === 'asc' ? '↓' : '↑')}</th>
            <th onClick={() => handleSort('emissions')}>Co2 Emissionen in millionen t/Jahr {sortField === 'emissions' && (sortDirection === 'asc' ? '↓' : '↑')}</th>
            <th onClick={() => handleSort('country')}>Land (bei Unternehmen) {sortField === 'country' && (sortDirection === 'asc' ? '↓' : '↑')}</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.emissions}</td>
              <td>{item.country}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Tabelle;
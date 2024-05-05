import Table from 'react-bootstrap/Table';

function Co2Tabelle() {
  return (
    <Table striped="columns">
      <thead>
        <tr>
          <th>Nr</th>
          <th>Land/Unternehmen</th>
          <th>Co2 Emissionen in millionen t/Jahr</th>
          <th>Land (bei Unternehmen)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>USA</td>
          <td>5000</td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td>China</td>
          <td>9000</td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Deutschland</td>
          <td>800</td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Japan</td>
          <td>1100</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Co2Tabelle;
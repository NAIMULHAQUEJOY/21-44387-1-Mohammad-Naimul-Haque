import React from 'react';
import profileImage from '../cv1.jpg';

const PersonalInfo = () => {
  return (
    <section style={{
      display: 'flex',
      justifyContent: 'space-between', // Ensures the content and image are on opposite sides
      alignItems: 'flex-start', // Aligns items to the top of the container
      minHeight: '150px' // Ensures the section has a minimum height
    }}>
      <div style={{ flex: 1 }}>
        <h1>Mohammad Naimul Haque</h1>
        <h4>Email: naimulhaquecse@gmail.com</h4>
        <h4>Address: 136 Boro Moghbazar Wireless, Dhaka, Bangladesh</h4>
        <h4>Contact: +8801742734440</h4>
        <p>Github: <a href="https://github.com/NAIMULHAQUEJOY">NAIMULHAQUEJOY</a></p>
        <p>
          Profile: A BSc in Computer Science & Engineering student at the American International University Bangladesh with strong academic achievement. Keen to pursue a career in professional services focusing on Artificial Intelligence, Advanced Database, and Advanced Programming Languages.
        </p>
        <p>
          <b>Frameworks:</b> .NET Framework | ASP .NET | Node JS |Nest JS.
        </p>
        <p>
          <b>Languages:</b> Type Script | Java Script | HTML | PHP | CSS | C/C++ | Java | SQL | MySql
        </p>
        <p>
          <b>Thesis:</b> Detection of fatty liver disease using machine learning model.
        </p>
      </div>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
        <img src={profileImage} alt="Profile" style={{ width: '120px', height: 'auto' }} />
      </div>
    </section>
  );
}

export default PersonalInfo;

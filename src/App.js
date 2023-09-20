// import logo from './logo.svg';
import './App.css';
import Education from "./components/Education";

function App() {
  return (
    <div className="App">
     <div className='container-principal'>
       <h1>Education</h1>
       <Education
        name="English 3th and 4th Adults"
        date="2023 - Present"
        image="aticana.png"
        institution="Instituto Cultural Argentino Norteamericano"
        sigla="(A.T.I.C.A.N.A)"
       />
      <Education
        name="Tecnicatura en Desarrollo y Calidad de Software"
        date="2021 - Present"
        image="unsta.png"
        institution="Universidad del Norte Santo Tomas de Aquino"
        sigla="(UNSTA)"
      />
      <Education
        name="Curso de REACT"
        date="2023"
        image="coderhouse_nuevo.jpg"
        institution="Coderhouse"
      />
      <Education
        name="Curso de Javascript"
        date="2023"
        image="coderhouse_nuevo.jpg"
        institution="Coderhouse"
      />
      <Education
        name="Curso de Desarrollo Web"
        date="2022"
        image="coderhouse_nuevo.jpg"
        institution="Coderhouse"
      />
       <Education
        name="English Express I and II"
        date="2020"
        image="anglo.jpg"
        institution="Instituto Cultural Argentino de Lenguas Vivas"
        sigla="(A.N.G.L.O)"
      />
     </div>
    </div>
  );
}

export default App;

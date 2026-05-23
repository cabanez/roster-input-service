import MyForm from './Form';
import MyData from './Data';

function App() {

  return (
    <>
      <section id="form">
        <div>
          <h3>Player Input Form</h3>
          <MyForm />
        </div>
      </section>
      <section id="data">
        <div>
          <h3>Player Data</h3>
          <MyData />
        </div>
      </section>
    </>
  )
}

export default App

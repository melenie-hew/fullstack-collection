import DogsList from "./DogsList"
import DogForm from "./DogForm"

function App() {
  return (
    <>
      <header className="header">
        <h1>Marley and Me</h1>
      </header>
        <h1 className="header1">
          A website of the goodest bois and girls 
        </h1>
      <section className="main">
        <DogsList/>
        <DogForm/>
    
      </section>
    </>
  )
}

export default App

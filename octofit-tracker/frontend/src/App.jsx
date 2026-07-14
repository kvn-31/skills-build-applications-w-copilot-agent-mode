import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import './App.css'

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#home">OctoFit Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#dashboard">Dashboard</Nav.Link>
              <Nav.Link href="#activities">Activities</Nav.Link>
              <Nav.Link href="#team">Team</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <header className="py-5 text-center">
          <h1>OctoFit Tracker</h1>
          <p className="lead">
            Modern multi-tier fitness tracking built with React 19, Vite, Express,
            and MongoDB.
          </p>
          <Button href="#api" variant="primary">
            View API status
          </Button>
        </header>

        <section id="api" className="mb-5">
          <h2>API</h2>
          <p>
            Backend runs on <strong>port 8000</strong> and serves the OctoFit
            Tracker API.
          </p>
        </section>

        <section id="frontend" className="mb-5">
          <h2>Frontend</h2>
          <p>
            Presentation tier running on <strong>port 5173</strong> with React
            19 and Bootstrap.
          </p>
        </section>

        <section id="database" className="mb-5">
          <h2>Database</h2>
          <p>
            Data tier uses MongoDB on <strong>port 27017</strong> and Mongoose for
            access.
          </p>
        </section>
      </Container>
    </>
  )
}

export default App

function App() {
  return (
    <div className="App container">
      <div className="flex">
        <div className="card">
          <div className="card-header">Default Font</div>
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card custom-font">
          <div className="card-header">Custom Font</div>
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

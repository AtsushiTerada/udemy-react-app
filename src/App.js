import React from 'react';

function App() {
//  return <div>Hello World!!</div>;
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am clicked.")}} />
      </React.Fragment>
    );

}

export default App;

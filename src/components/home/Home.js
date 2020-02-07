import React, { useState, useEffect } from 'react';


const Home = () => {
  const [shit, setShit] = useState("");
  const [something, setSomething] = useState("");

  useEffect(() => {
    setSomething("Test");
  }, [])

  useEffect(() => {
    if (shit !== " tester") {
      setShit(" tester");
    }
  }, [shit])

  return (
    <div className="home">
      { something } { shit }
    </div>
  )
}

export default Home;

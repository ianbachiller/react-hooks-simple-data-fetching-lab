// // create your App component here
// Deliverables
// This lab is missing the App component that index.js is looking for. To pass the tests in this lab:

// Create an App component from scratch
// Use the useEffect hook in the App component. Inside the callback for useEffect, send a fetch request to https://dog.ceo/api/breeds/image/random, a free API that returns a random image of a dog.
// Display a <p> tag with the text of "Loading..." when the component is first rendered
// After receiving a response from the API, show the dog image in an <img> tag, with the alt attribute set to "A Random Dog".

import React, {useEffect, useState} from "react";


function App () {
    const [doggo, setDoggo] = useState(" ")
    const [loading, setLoading] = useState(true);


    useEffect(()=> {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(resp => resp.json())
            .then(dog => {
                setDoggo(dog.message)
                setLoading(false)
            })
    }, [])

    if(loading) return <p>"Loading..."</p>
    return (
        <div className="dog">
            <img src={doggo} alt={"A Random Dog"} />
        </div>
    )
}







export default App
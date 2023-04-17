import { useState } from 'react';
import Result from './Result';

export default function Button() {
    const [occasion,setOccasion] = useState("");
    const [careType,setCareType] = useState("A");
    const [rel,setRel] = useState("B");
    const [adjs,setAdjs] = useState("C");

    function handleOccasion(e){
        setOccasion(e.target.value);
    }

    function generateHandler(e){
        console.log("occasion: ",occasion);
        console.log("careType: ",careType);
        console.log("relation: ",rel);
        console.log("adjs: ",adjs);

        // Make an GET request to flask backend
        // retrieve the data
        const data = {
            "name":"Anand Kumar",
            "greeting":"Hello",
            "exclamation":"wtf"
        }

        return <Result data={data}/>

    }

    return (
        <>
            <input placeholder="Enter occasion" onChange={handleOccasion} />
            <input placeholder="Enter care type" />
            <input placeholder="Enter relationship to the person" />
            <input placeholder="Enter adjectives" />
            <button onClick={generateHandler}>Generate Suggestions</button>
        </>
    )
}




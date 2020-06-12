import React, { useState, useEffect } from "react";
import styles from "./DictStyles";
import dict from "./data/eng2thai.json";

function translate(word) {
  return dict.filter(vocab => {
    return vocab.search === word
    console.log(word);
  })
}

export default function DictApp() {
  const [results, setResults] = useState([]);
  const [values, setValues] = useState("");

  useEffect(() => {
    setResults(translate(values));
  }, [values]);

  function onInputChanged(e) {
    // Write some code here...
    setValues(e.target.value);
    console.log(e.target.value);
    // setResults(translate(e.target.value));
  }

  function onSubmitted(e) {
    // Write some code here...
    e.preventDefault();
    //translate(value);
    setResults(translate(values));
    console.log(translate(values));
    //resetInputField();

  }
  // function resetInputField(e) {
  //   setValue(" ");
  // }

  return (
    <div style={styles.app}>
      <div style={styles.wrapper}>
        <div style={styles.form}>
          <input
            style={styles.keyword}
            placeholder="Enter Keywords"
            value={values}
            onChange={onInputChanged}
          />

          <button style={styles.button} onClick={onSubmitted}>Search</button>
        </div>
        <ul style={styles.results}>

          {results.map(function (vocab, index) {
            return <li key={`${vocab.result}-${index}`}>{vocab.result}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

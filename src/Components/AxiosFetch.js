import React from 'react'

const AxiosFetch = () => {
  return (
    <div>
      <h2>1. Difference between Axios and fetch</h2>
      <table border={2}>
        <thead>
          <tr>
            <th>Axios</th>
            <th>Fetch</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Axios has url in request object.</td>
            <td>Fetch has no url in request object.</td>
          </tr>
          <tr>
            <td>Axios has built-in support for download progress.</td>
            <td>Fetch does not support upload progress.</td>
          </tr>
          <tr>
            <td>Axios uses the data property.</td>
            <td>Fetch uses the body property.
            </td>
          </tr>
          <tr>
            <td>Axios performs automatic transforms of JSON data.</td>
            <td>Fetch is a two-step process when handling JSON data- first, to make the actual request; second, to call the .json() method on the response.</td>
          </tr>
          <tr>
            <td>Axios allows cancelling request and request timeout.</td>
            <td>Fetch does not.</td>
          </tr>
        </tbody>
      </table>
      <hr/>
    </div>
  );
}

export default AxiosFetch;
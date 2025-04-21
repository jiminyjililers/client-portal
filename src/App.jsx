import React, { useState } from "react";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "client@example.com" && password === "password") {
      setLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const stockItems = [
    {
      image: "🧥",
      name: "Hoodie 001",
      sku: "H001",
      quantity: 128,
      updated: "April 20, 2025"
    },
    {
      image: "🧢",
      name: "Cap Blue",
      sku: "C102",
      quantity: 64,
      updated: "April 20, 2025"
    },
    {
      image: "👕",
      name: "T-shirt White",
      sku: "TSW001",
      quantity: 22,
      updated: "April 19, 2025"
    }
  ];

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "800px", margin: "auto" }}>
      {loggedIn ? (
        <>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>📦 Your Stock</h1>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
                <th style={{ padding: "12px" }}>Image</th>
                <th style={{ padding: "12px" }}>Name</th>
                <th style={{ padding: "12px" }}>SKU</th>
                <th style={{ padding: "12px" }}>Quantity</th>
                <th style={{ padding: "12px" }}>Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {stockItems.map((item, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#ffffff" : "#f9f9f9",
                    borderBottom: "1px solid #ddd"
                  }}
                >
                  <td style={{ padding: "12px", fontSize: "1.5rem" }}>{item.image}</td>
                  <td style={{ padding: "12px" }}>{item.name}</td>
                  <td style={{ padding: "12px" }}>{item.sku}</td>
                  <td style={{ padding: "12px" }}>{item.quantity}</td>
                  <td style={{ padding: "12px" }}>{item.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div style={{ maxWidth: "400px", margin: "auto" }}>
          <h1 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Client Portal Login</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              marginBottom: "1rem",
              padding: "0.75rem",
              border: "1px solid #ccc",
              borderRadius: "4px"
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              marginBottom: "1rem",
              padding: "0.75rem",
              border: "1px solid #ccc",
              borderRadius: "4px"
            }}
          />
          <button
            onClick={handleLogin}
            style={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "#4f46e5",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

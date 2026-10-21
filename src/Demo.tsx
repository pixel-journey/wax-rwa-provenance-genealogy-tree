"use client";

import { lineage } from "./line";

const owners = ["alice", "bob", "alice"];

export function Demo() {
  const line = lineage(owners);
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>Three owners, two hops</h1>
      <p className="lede">Alice can own it again later. Alice cannot follow Alice. This list was not read from a transfer history.</p>
      <ol>
        {owners.map((owner, index) => (
          <li key={`${owner}-${index}`}>{owner}</li>
        ))}
      </ol>
      {line.ok ? <p>{line.hops} hops.</p> : <p>{line.reason}</p>}
    </main>
  );
}

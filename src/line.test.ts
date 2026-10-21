import { describe, expect, it } from "vitest";
import { lineage } from "./line";

describe("owner line", () => {
  it("counts hops and refuses an immediate repeat", () => {
    expect(lineage(["alice", "bob", "alice"])).toEqual({ ok: true, hops: 2 });
    expect(lineage(["alice", "alice"]).ok).toBe(false);
  });
});

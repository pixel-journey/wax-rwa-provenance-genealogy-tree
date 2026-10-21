/**
 * An owner list with no immediate repeat. Not a chain history.
 */

const NAME = /^(?!.*\.\.)(?!\.)(?!.*\.$)[a-z1-5.]{1,12}$/;

export type Line = { ok: false; reason: string } | { ok: true; hops: number };

export function lineage(owners: readonly string[]): Line {
  if (owners.length < 1 || owners.length > 12) return { ok: false, reason: "pass 1 to 12 owners" };
  for (let i = 0; i < owners.length; i += 1) {
    if (!NAME.test(owners[i])) return { ok: false, reason: `${owners[i]} is not an account` };
    if (i > 0 && owners[i] === owners[i - 1]) return { ok: false, reason: "an owner cannot follow itself" };
  }
  return { ok: true, hops: owners.length - 1 };
}

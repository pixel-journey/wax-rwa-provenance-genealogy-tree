import { HISTORY_ORIGIN, active, historyActions } from "./api";
import { lineage } from "./line";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const line = lineage(["alice", "bob", "alice"]);
if (!line.ok) throw new Error(line.reason);
const owners = line;

export const USE_CASES: UseCase[] = [
  {
    title: "Transfer history is not this list",
    detail: `alice, bob, alice is ${owners.hops} hops. Hyperion is not walked. The request is not sent.`,
    request: historyActions(HISTORY_ORIGIN, "alice", "atomicassets:transfer", 20),
    transaction: null,
  },
  {
    title: "Unsigned atomicassets transfer of one fixture id",
    detail: "The next hop would be a transfer. This one is not broadcast, and the owner list above was not read from it.",
    request: historyActions(HISTORY_ORIGIN, "bob", "atomicassets:transfer", 20),
    transaction: {
      note: "Not broadcast. asset id 1 is a fixture.",
      actions: [
        active("alice", {
          account: "atomicassets",
          name: "transfer",
          data: { from: "alice", to: "bob", asset_ids: ["1"], memo: "provenance preview" },
        }),
      ],
    },
  },
];

export function assertUseCases(): void {
  if (owners.hops !== 2) throw new Error(String(owners.hops));
}

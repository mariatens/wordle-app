import { markWordleGuess } from "./markGuess";

test("", () => {
    expect(markWordleGuess("HELLO", "HELLO")).toStrictEqual(["green","green","green","green", "green"]);
    expect(markWordleGuess("HELLO","LOLON")).toStrictEqual(["grey","grey","green","yellow", "yellow"]);
    expect(markWordleGuess("NONAN","LOLON")).toStrictEqual(["yellow", "green", "grey","grey","grey"]);
  });
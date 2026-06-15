import { describe, expect, it } from "vitest";

import { lookupRule } from "./rules-map";

describe("lookupRule", () => {
  it("finds official unit rules after stripping {renegade}", () => {
    expect(lookupRule("Saurus Warriors {renegade}")?.url).toBe(
      "unit/saurus-warriors",
    );
    expect(lookupRule("Bastiladon {renegade}")?.url).toBe("unit/bastiladon");
    expect(lookupRule("Rat Ogres {renegade}")?.url).toBe("unit/rat-ogres");
  });

  it("finds renegade-specific unit entries when present", () => {
    expect(lookupRule("Skink Cohorts {renegade}")?.url).toBe(
      "unit/skink-cohorts-renegade",
    );
  });

  it("prefers renegade special rules over official versions", () => {
    expect(lookupRule("Cold Blooded {renegade}")?.url).toBe(
      "special-rules/cold-blooded-renegade",
    );
  });
});

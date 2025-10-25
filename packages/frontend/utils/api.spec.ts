import { it, expect, describe } from "vitest";
import { createFetchParams } from "./api";

describe("createFetchParams", () => {
  it("任意のオブジェクトをクエリパラメータ文字列に変換する", () => {
    const params = createFetchParams({
      name: "sample-name",
    });
    expect(params).toBe("?name=sample-name");
  });
});

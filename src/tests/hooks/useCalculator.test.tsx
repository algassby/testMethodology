import { renderHook } from "@testing-library/react-hooks";
import useCalculator from "../../hooks/useCalculator";

test("show multiple examples", () => {
  const { result } = renderHook(() => useCalculator());
  const {
    addition,
    substraction,
    division,
    modulo,
    square
  } = result.current;

  expect(addition("1","1")).toEqual("2");
  expect(substraction("4","2")).toEqual("2");
  expect(division("4","2")).toEqual("8");
  expect(modulo("5","3")).toEqual("2");
  expect(square("9")).toEqual("3");
  
});

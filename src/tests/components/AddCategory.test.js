import React from "react";
import "@testing-library/jest-dom";
import AddCategory from "../../components/AddCategory";
import { shallow } from "enzyme";

describe("Pruebas en <AddCategory/>", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  test("Debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";
    input.simulate("change", { target: { value } });
  });
  test("No debe postear la info onsubmit", () => {
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });
    expect(setCategories).not.toHaveBeenCalled();
  });
  test("Debe llamar el setCategories y limpiar la caja de texto", () => {
    const value = "Hola mundo";
    wrapper.find("input").simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});

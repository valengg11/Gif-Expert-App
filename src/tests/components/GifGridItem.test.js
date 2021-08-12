import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem/>", () => {
  const title = "Un titulo";
  const url = "http://localhost/algo.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  test("Debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe tener un parrafo con el title", () => {
    const p = wrapper.find("p");
    expect(p.text()).toBe(title);
  });
  test("Debe tener una imagen con src y alt de los props", () => {
    const img = wrapper.find("img");
    console.log(img.prop("src"));
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });
  test("Debe tener la clase animate__fadeIn", () => {
    const div = wrapper.find("div");
    const className = div.prop('className')
    //Dos formas de hacerlo
    expect(div.prop('className')).toContain("animate__fadeIn");
    expect(className.includes('animate__fadeIn')).toBe(true)
  });
});

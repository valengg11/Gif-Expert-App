import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en el hook useFetchGifs", () => {
  test("Debe retornar el estado inicial", async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("Friends"));
    const { data, loading } = result.current;
    await waitForNextUpdate()
    expect(data).toEqual([])
    expect(loading).toBe(true)

    // const { data: images, loading } = useFetchGifs('Friends');
    console.log(data, loading);
  });
  test('Debe retornar un arreglo de imagenes y el loading en false', async() => {
    const { result , waitForNextUpdate} = renderHook(() => useFetchGifs("Friends"));
    await waitForNextUpdate()
    const { data, loading } = result.current;
    expect(data.length).toBe(10)
    expect(loading).toBe(false)
  })
  
});

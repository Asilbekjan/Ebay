import axios from "axios";

let client = axios.create({
  baseURL: "https://dummyjson.com",
  headers: { "Content-Type": "application/json" },
});

class apiEbay {
  static async products() {
    let res = await client({
      url: "/products",
      method: "GET",
    });
    return res;
  }
  static async singleProducts(id) {
    let res = await client({
      method: "GET",
      url: `/products/${id}`,
    });
    return res;
  }
  static async singleCategory(sort){
    let res = await client({
        method:"GET",
        url:`/products/category/${sort}`
    })
    return res
  }
  static async searchproducts(search){
    let res = await client({
      method:"GET",
      url:`/search/${search}`
      https://dummyjson.com/products/search?q=phone
    })
    return res
  }
}

export default apiEbay;

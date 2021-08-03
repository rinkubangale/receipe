async function getData(url) {

    try {
            
        let res = await fetch(url)
        let data = await res.json()
        return data;
        
    }
    catch(e) {
        console.log("e:",e)
    }
}

function appendData(products, parent) {
    
    // console.log(products)
    const { meals: [{ strMealThumb, strMeal, strInstructions }] } = products
    
    let div = document.createElement("div")
    let div_da = document.createElement("div")

    let p = document.createElement("p")

    let h5 = document.createElement("h2")

    let img = document.createElement("img")

    img.src = strMealThumb;

    h5.innerHTML = strMeal;
    
    p.innerHTML = strInstructions;

    div_da.append(img, p)

    div.append(h5, div_da)

    parent.append(div);

}

export { getData, appendData }
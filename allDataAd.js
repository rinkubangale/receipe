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

function appendData({ meals }, parent) {
    
    // console.log(products)
    {
        meals.forEach(({ strMealThumb, strMeal, strYoutube }) => {
        
            let div = document.createElement("div")
            let div_da = document.createElement("div")

            let div_y = document.createElement("div")

            let h5 = document.createElement("h2")

            let img = document.createElement("img")

            img.src = strMealThumb;

            h5.innerHTML = strMeal;

            let i = strYoutube.split("=");

            div_y.innerHTML = `Watch it on Yutube  <iframe width="560" height="315" src="https://www.youtube.com/embed/${i[1]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

            div_da.append(img, div_y)

            div.append(h5, div_da)

            parent.append(div);

        })
    }
}

    export { getData, appendData };
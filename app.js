const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitem = document.getElementById("shop")
    const product = document.querySelectorAll(".box")
    const pname = storeitem.getElementsByTagName("h5")



    for (var i = 0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('h5')[0];
        

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexof(searchbox) > -1){
                product[i].style.display = "";

            } else {
                product[i].style.display = "none";
            }


        }
    }
}
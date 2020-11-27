var panels = [
    {
      title: "Pedagogy of the Oppressed",
      content: "Paulo Freire",
      cover: "https://images-na.ssl-images-amazon.com/images/I/41OtPGPAMuL._SX333_BO1,204,203,200_.jpg"
    },
    
    {
        title: "Pedagogy of the Oppressed",
        content: "Paulo Freire",
        cover: "https://images-na.ssl-images-amazon.com/images/I/51ZYfODpfXL._SX331_BO1,204,203,200_.jpg"
    },

    {
      title: "Pedagogy of the Oppressed",
      content: "Paulo Freire",
      cover: "https://www.akpress.org/pub/media/catalog/product/cache/1ec012b46cbfe4262fc94f3e95ab2d9c/n/e/newjip.jpg"
    },
];
    
function createPanel(panels, shelfSelector){
    let shelf= document.querySelector(shelfSelector);
    if (shelf){
        if(panels instanceof Array){
            for (let panel of panels){
            // You will add your content here for
            // let html = 
            let html = `
                <h1 class="title">${panel.title}</h1>
                <h2 class="content">${panel.content}</h2>
                <img class="cover" src="${panel.cover}" alt="Cover Art">
            `
            let container = document.createElement("div");
            container.className="panel";
            container.innerHTML = html;
            container.tabIndex = panels.indexOf(panel);
            shelf.append(container);
            }
        }
    }   
}
    
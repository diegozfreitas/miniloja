 const data = [
        {
          name: "Celular",
          img:
            "https://images-americanas.b2w.io/produtos/01/00/img7/01/00/item/462138/6/462138611SZ.jpg",
          qts: "",
        },

        {
          name: "Geladeira",
          img:
            "https://images-americanas.b2w.io/produtos/01/00/img/1371035/9/1371035915_1SZ.jpg",
          qts: "",
        },

        {
          name: "Tv Smart",
          img:
            "https://images-americanas.b2w.io/produtos/01/00/img/1618074/6/1618074634_1SZ.jpg",
          qts: "",
        },

        {
          name: "Notebook",
          img:
            "https://images-americanas.b2w.io/produtos/01/00/img/1818873/8/1818873810_1SZ.jpg",
          qts: "",
        },

        {
          name: "Fritadeira",
          img:
            "https://images-americanas.b2w.io/produtos/01/00/img/133855/7/133855766_1SZ.jpg",
          qts: "",
        },
      ];

      puxaProdutos = () => {
        data.map((val) => {
          document.querySelector("#list_produtos").innerHTML += `
            <div class="produto">
              <img src="${val.img}" alt="">
              <h1>${val.name}</h1>
              <Button>Comprar</button>

            </div>
          `;
        });
      };

      puxaProdutos();
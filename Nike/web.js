const combine = document.querySelector(".sliderTogether")
const items = document.querySelectorAll(".item")
const products = [
    {
      id: 1,
      title: "Air Force 1",
      price: 7500,
      colors: [
        {
          code: "white",
          img: "./ImageSource/Products/Airforce1.png",
        },
        {
          code: "black",
          img: "./ImageSource/Products/Airforce1(black)1.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 10000,
      colors: [
        {
          code: "red",
          img: "./ImageSource/Products/naj1(red).png",
        },
        {
          code: "orange",
          img: "./ImageSource/Products/naj1(orange).png",
        },
      ],
    },
    {
      id: 3,
      title: "Air Max",
      price: 6500,
      colors: [
        {
          code: "white",
          img: "./ImageSource/Products/nikeairmax.png",
        },
      {
        code: "white",
        
      },
      ],
    },
    {
      id: 4,
      title: "Jordon Retro 4",
      price: 20000,
      colors: [
        {
          code: "green",
          img: "./ImageSource/Products/Nike1.png",
        },
        {
          code: "green",
        },
      ],
    },
  ];
  let selectedProduct = products[0]
 const currentProductImg = document.querySelector(".proImg");
 const currentProductName = document.querySelector(".productName");
 const currentProductPrice = document.querySelector(".productPrice");
 const currentProductColors = document.querySelectorAll(".color");
 const currentProductSizes = document.querySelectorAll(".size");




items.forEach((item,index) => {
item.addEventListener("click",()=>{
    combine.style.transform = `translateX(${-100 * index}vw)`;
    selectedProduct = products[index]
    currentProductName.textContent = selectedProduct.title
    currentProductPrice.textContent = "₹ "  + selectedProduct.price
    currentProductImg.src = selectedProduct.colors[0].img
    currentProductColors.forEach((color,index) => {
      color.style.backgroundColor = selectedProduct.colors[index].code;
    });
});
});




currentProductColors.forEach((color,index)=>{
color.addEventListener("click",()=>{
  currentProductImg.src = selectedProduct.colors[index].img
})
});
currentProductSizes.forEach((size,index)=>{
  size.addEventListener("click", () =>{
    currentProductSizes.forEach((size)=>{
      size.style.backgroundColor ="white";
      size.style.color = "black";
    });
    size.style.backgroundColor ="black";
      size.style.color = "white";
  });
});



const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".productPayment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
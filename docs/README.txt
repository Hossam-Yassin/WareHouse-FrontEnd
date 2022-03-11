This is a react project that represent the front end layer in the warehouse solution 

It mainly consist of two pages with the below responsibilities : 

1- Grid Page : This is a listing page for all the products in the warehouse system , currently we have around 16 products that not loaded at once but loaded in multiple calls so every call you will get only 5 products (5 is configurable so we can increase or decrease it) until you fully loaded all 16 products , you will not be able to make further calls.

2- Product Information Page : This is the product details page that show more info about the product like name , description , contained articles and stock availability as well as it has functionality for purchasing that product ... The number of the product you can purchase is relying on the available stocks of that product and this info will be displayed as well.

Attached sample pages for Grid and PIP for different products.

** How to Run it: 

Please connect to the front-end repository and pull the latest code and ensure to install all dependencies that required by this project , you can check all project dependencies in the package.json file 

to start you application : 
1- move to the folder that contain the code 
2- run command : npm install
3- run command : npm start


Note: 
I have used a static image for footer and header snippets from IKEA site to have good look and feel for the product and grid pages so do not expect functionalities in these two sections

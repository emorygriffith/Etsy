

var cont= $('#drink'),
    title, price, currency_code, image, shop_name, glass;


whiskey.results.forEach ( function(item) {

  title = "<p>" + item.title + "</p>";

  price = "<p>" + item.price + "</p>";

  currency_code = "<p>" + item.currency_code + "</p>";

  shop_name = "<p>" + item.Shop.shop_name + "</p>";

  image = "<img src='" + item.Images[0].url_170x135 + "'/>";

  glass = "<li>" + image + title + shop_name + price + currency_code +  "</li>";

  cont.append(glass);

});

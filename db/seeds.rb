
user = User.create(name: "Admin", email: "admin@user.se", password: "adminpassword", password_confirmation: "adminpassword", isAdmin: true)
App.create(user_id: user.id, app_name: "Twitter", key: "DFGder123Sdf34SFDD")

restaurant = Restaurant.create(name: "Vegan Good Store", description: "Buy vegan food", stars: 4)
restaurant2 = Restaurant.create(name: "Vegan yum yum", description: "The best vegan food in town", stars: 5)
restaurant3 = Restaurant.create(name: "Max Hamburgare", description: "The best fast food in town", stars: 4)
Location.create(address_and_city: "Amiralsgatan 12a, Malmö", restaurant_id: restaurant.id)
Location.create(address_and_city: "Kiviksgatan, Malmö", restaurant_id: restaurant2.id)
Location.create(address_and_city: "Skräddaretorpsvägen 16, kalmar", latitude: 56.6, longitude: 13, restaurant_id: restaurant2.id)
Location.create(address_and_city: "Amiralsgatan 12a, Malmö", restaurant_id: restaurant3.id)

tag = Tag.create(name: "Vegan")
tag2 = Tag.create(name: "Nice Food")
restaurant.tags << tag
restaurant2.tags << tag
restaurant2.tags << tag2
restaurant3.tags << tag2

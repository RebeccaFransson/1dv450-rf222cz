
user = User.create(name: "Admin", email: "admin@user.se", password: "adminpassword", password_confirmation: "adminpassword", isAdmin: true)
App.create(user_id: user.id, app_name: "Twitter", key: "DFGder123Sdf34SFDD")

restaurant = Restaurant.create(name: "Vegan Good Store", description: "Buy vegan food", stars: 4)
restaurant2 = Restaurant.create(name: "Vegan yum yum", description: "The best vegan food in town", stars: 5)
Location.create(city: "Malmö", address: "Amiralsgatan 12a", latitude: 55.6, longitude: 13, restaurant_id: restaurant.id)
Location.create(city: "Malmö", address: "Norravägen 4b", latitude: 56.6, longitude: 13, restaurant_id: restaurant2.id)
Location.create(city: "Kalmar", address: "Skräddaretorpsvägen 16", latitude: 56.6, longitude: 13, restaurant_id: restaurant2.id)

tag = Tag.create(name: "Vegan")
restaurant.tags << tag
restaurant2.tags << tag

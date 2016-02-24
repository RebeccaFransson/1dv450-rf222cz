
user = User.create(name: "Admin", email: "admin@user.se", password: "adminpassword", password_confirmation: "adminpassword", isAdmin: true)
App.create(user_id: user.id, app_name: "Restuarant map app", key: "fb3737b1c0d01edd92cf64262bc8efdf")

creator = Creator.create(name: "Tobias", password: "hejsan", password_confirmation: "hejsan")

restaurant = Restaurant.new(name: "Vegan Good Store", description: "Buy vegan food", stars: 4, creator_id: creator.id)
restaurant2 = Restaurant.new(name: "Vegan yum yum", description: "The best vegan food in town", stars: 5, creator_id: creator.id)
restaurant3 = Restaurant.new(name: "Max Hamburgare", description: "The best fast food in town", stars: 4, creator_id: creator.id)

tag = Tag.create(name: "Vegan")
tag2 = Tag.create(name: "Nice Food")

restaurant.tags << tag
restaurant2.tags << tag
restaurant2.tags << tag2
restaurant3.tags << tag2

restaurant.save
restaurant2.save
restaurant3.save

Location.create(address_and_city: "Amiralsgatan 12a, Malmö", restaurant_id: restaurant.id)
Location.create(address_and_city: "Kiviksgatan, Malmö", restaurant_id: restaurant2.id)
Location.create(address_and_city: "Skräddaretorpsvägen 16, kalmar", restaurant_id: restaurant2.id)
Location.create(address_and_city: "Amiralsgatan 12a, Malmö", restaurant_id: restaurant3.id)
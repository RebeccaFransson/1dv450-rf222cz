
user = User.create(name: "Admin", email: "admin@user.se", password: "adminpassword", password_confirmation: "adminpassword", isAdmin: true)
App.create(user_id: user.id, app_name: "Restuarant map app", key: "fb3737b1c0d01edd92cf64262bc8efdf")

creator = Creator.create(name: "Tobias", password: "hejsan", password_confirmation: "hejsan", email: "tobias@restaurantmap.com")
creator2 = Creator.create(name: "Rebecca", password: "hejsan", password_confirmation: "hejsan", email: "rebecca@restaurantmap.com")

restaurant = Restaurant.new(name: "Vegan Good Store", description: "Buy vegan food", stars: 4, creator_id: creator.id)
restaurant2 = Restaurant.new(name: "Vegan yum yum", description: "The best vegan food in town", stars: 5, creator_id: creator.id)
restaurant3 = Restaurant.new(name: "Max Hamburgare", description: "The best fast food in town", stars: 3, creator_id: creator.id)
restaurant4 = Restaurant.new(name: "Rebeccas foodcabin", description: "Yummy food in a cute cabin", stars: 4, creator_id: creator2.id)
restaurant5 = Restaurant.new(name: "Grandmas café", description: "Grandma makes a big and awsome sweetpotato-stew", stars: 5, creator_id: creator2.id)
restaurant6 = Restaurant.new(name: "A cake on a cake", description: "We looooove cake", stars: 2, creator_id: creator2.id)

tag = Tag.create(name: "Vegan")
tag2 = Tag.create(name: "Nice Food")
tag3 = Tag.create(name: "Hot food")
tag4 = Tag.create(name: "Sweets")
tag5 = Tag.create(name: "Cakes")


restaurant.tags << tag
restaurant2.tags << tag
restaurant2.tags << tag2
restaurant3.tags << tag2
restaurant4.tags << tag3
restaurant5.tags << tag4
restaurant6.tags << tag4
restaurant6.tags << tag5

restaurant.save
restaurant2.save
restaurant3.save
restaurant4.save
restaurant5.save
restaurant6.save

Location.create(address_city: "Amiralsgatan 12a, Malmö", restaurant_id: restaurant.id)
Location.create(address_city: "Kiviksgatan, Malmö", restaurant_id: restaurant2.id)
Location.create(address_city: "Skräddaretorpsvägen 16, kalmar", restaurant_id: restaurant2.id)
Location.create(address_city: "Falkenbergsvägen 25, Kalmar", restaurant_id: restaurant3.id)
Location.create(address_city: "Klockaregatan 22, vellinge", restaurant_id: restaurant4.id)
Location.create(address_city: "Kultomtsgatan 1, Skövde", restaurant_id: restaurant5.id)
Location.create(address_city: "Södra Hötoftavägen 212, vellinge", restaurant_id: restaurant6.id)
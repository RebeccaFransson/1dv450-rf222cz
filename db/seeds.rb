
user = User.create(name: "Admin", email: "admin@user.se", password: "adminpassword", password_confirmation: "adminpassword", isAdmin: true)
App.create(user_id: user.id, app_name: "Twitter", key: "DFGder123Sdf34SFDD")
location = Location.create(city: "Malmö", address: "Amiralsgatan 12a", lat: 55.6, lon: 13)
restaurant = Restaurant.create(name: "Vegan Good Store", description: "Buy vegan food", stars: "5", location_id: location.id)
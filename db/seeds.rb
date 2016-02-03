# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user = User.create(name: "Rebecca", email: "rebecca@awesome.se", password: "hejsan", password_confirmation: "hejsan", isAdmin: false)

app = App.create(user_id: user.id, app_name: "Twitter", key: "g2ot3m51pkfdjarbvyxzceq8l74wsn9h6u0i")
app2 = App.create(user_id: user.id, app_name: "Yuotube", key: "3i6c1a4tg8hq07lp9zobujk2x5yvfrmsnedw")


user3 = User.create(name: "Admin", email: "admin@user.se", password: "adminpassword", password_confirmation: "adminpassword", isAdmin: true)

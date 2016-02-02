# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user = User.create(name: "Rebecca", email: "rebecca@awesome.se", password_digest: "hej", isAdmin: false)
app = App.create(user_id: user.id, app_name: "Twitter", key: "DGDF2131SGFsfdSDF") #

user2 = User.create(name: "Karin", email: "karin@awesome.se", password_digest: "hej", isAdmin: false)
app2 = App.create(user_id: user2.id, app_name: "Youtube", key: "DGDF2131SGFsfdSDF") #
app3 = App.create(user_id: user2.id, app_name: "Facebook", key: "DGDF2131SGFsfdSDF") #

user3 = User.create(name: "Admin", email: "admin@awesome.se", password_digest: "hej", isAdmin: true)

##app.user_id << user
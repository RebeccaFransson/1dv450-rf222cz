# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160224122713) do

  create_table "apps", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "app_name",   limit: 30
    t.string   "key",        limit: 100
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "creators", force: :cascade do |t|
    t.string   "name"
    t.string   "password_digest"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "locations", force: :cascade do |t|
    t.string   "address_and_city"
    t.decimal  "latitude"
    t.decimal  "longitude"
    t.integer  "restaurant_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_index "locations", ["restaurant_id"], name: "index_locations_on_restaurant_id"

  create_table "restaurants", force: :cascade do |t|
    t.string   "name",        limit: 100
    t.string   "description", limit: 250
    t.decimal  "stars"
    t.integer  "creator_id"
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  add_index "restaurants", ["creator_id"], name: "index_restaurants_on_creator_id"

  create_table "restaurants_tags", id: false, force: :cascade do |t|
    t.integer "restaurant_id"
    t.integer "tag_id"
  end

  add_index "restaurants_tags", ["restaurant_id"], name: "index_restaurants_tags_on_restaurant_id"
  add_index "restaurants_tags", ["tag_id"], name: "index_restaurants_tags_on_tag_id"

  create_table "tags", force: :cascade do |t|
    t.string   "name",       limit: 50
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "name",            limit: 20
    t.string   "email",           limit: 50,                 null: false
    t.string   "password_digest",                            null: false
    t.boolean  "isAdmin",                    default: false, null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end

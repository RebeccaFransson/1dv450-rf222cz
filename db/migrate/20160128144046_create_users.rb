class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string "name", limit: 20
      t.string "email", limit: 50, null: false
      t.string "password_digest", null: false
      t.boolean "isAdmin", null: false, default: false

      t.timestamps
    end
  end
end

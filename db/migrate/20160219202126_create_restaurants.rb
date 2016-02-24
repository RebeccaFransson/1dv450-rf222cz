class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :name, limit: 100
      t.string :description, limit: 250
      t.decimal :stars, limit: 5
      t.belongs_to :creator, index: true

      t.timestamps null: false
    end
  end
end

class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :address_city
      t.decimal :latitude
      t.decimal :longitude
      t.belongs_to :restaurant, index: true

      t.timestamps null: false
    end
  end
end

class CreateLocationsRestaurants < ActiveRecord::Migration
  def change
    create_table :locations_restaurants do |t|
      t.belongs_to :locations, index: true
      t.belongs_to :restaurants, index: true
    end
  end
end

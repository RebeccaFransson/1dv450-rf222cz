class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :city
      t.string :address
      t.integer :lat
      t.integer :lon


      t.timestamps null: false
    end
  end
end

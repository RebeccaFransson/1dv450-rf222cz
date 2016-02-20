class CreateRestaurantsTags < ActiveRecord::Migration
  def change
    create_table :restaurants_tags, id: false do |t|
      t.belongs_to :restaurants, index: true
      t.belongs_to :tags, index: true
    end
  end
end

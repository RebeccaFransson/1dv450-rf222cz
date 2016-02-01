class CreateApps < ActiveRecord::Migration
  def change
    create_table :apps do |t|
      t.references :user

      t.string "app_name", limit: 30
      t.string "key", limit: 100

      t.timestamps
    end
  end
end

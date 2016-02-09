class App < ActiveRecord::Base
  belongs_to :users

  validates :app_name, presence: true, length: { within: 5..100 }
  validates :key, presence: true
end

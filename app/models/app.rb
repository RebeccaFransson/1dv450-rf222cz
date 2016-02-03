class App < ActiveRecord::Base
  belongs_to :User

  validates :app_name, presence: true, length: {within: 5..100}
end

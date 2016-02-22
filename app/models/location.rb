class Location < ActiveRecord::Base
  belongs_to :resturants

  validates :city,          presence: true, length: {within: 2..100}
  validates :address,       presence: true
  validates :restaurant_id, presence: true;
end

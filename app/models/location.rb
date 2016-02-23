class Location < ActiveRecord::Base
  belongs_to :resturants

  validates :address_and_city,          presence: true, length: {within: 10..200}
  validates :restaurant_id, presence: true


  geocoded_by :address_and_city
  after_validation :geocode,
                   :if => lambda{ |obj| obj.address_and_city_changed? }
end

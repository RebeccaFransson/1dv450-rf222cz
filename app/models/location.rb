class Location < ActiveRecord::Base
  has_many :resturants

  validates :city, presence: true, length: {within: 2..100}
  validates :address, presence: true
end

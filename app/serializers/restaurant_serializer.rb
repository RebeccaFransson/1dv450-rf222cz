class RestaurantSerializer < ActiveModel::Serializer

  attributes :name, :description
  has_many :locations, serializer: LocationSerializer


end

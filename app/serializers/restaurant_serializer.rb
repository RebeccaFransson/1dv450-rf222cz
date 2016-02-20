class RestaurantSerializer < ActiveModel::Serializer
  attributes :name, :tags, :locations
  has_many :locations
end

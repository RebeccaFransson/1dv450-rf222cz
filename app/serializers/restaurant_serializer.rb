class RestaurantSerializer < ActiveModel::Serializer

  attributes :name, :description
  has_many :locations, serializer: LocationSerializer
  has_many :tags, serializer: TagSerializer
  has_many :tags, serializer: CreatorSerializer


end

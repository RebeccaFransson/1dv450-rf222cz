class RestaurantSerializer < ActiveModel::Serializer

  attributes :name, :description, :stars
  has_many :locations, serializer: LocationSerializer
  has_many :tags, serializer: TagSerializer
  has_one :creator, serializer: CreatorSerializer


end

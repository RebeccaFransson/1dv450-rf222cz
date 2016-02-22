class RestaurantSerializer < ActiveModel::Serializer
  #attribute :tags, key: :name
  #embed :ids
  attributes :name, :description
  has_many :locations, serializer: LocationSerializer
  #embed :ids, include: true


end

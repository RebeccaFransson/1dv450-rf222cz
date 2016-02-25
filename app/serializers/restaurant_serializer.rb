class RestaurantSerializer < ActiveModel::Serializer

  attributes :id, :name, :description, :stars, :links
  has_many :locations, serializer: LocationSerializer
  has_many :tags, serializer: TagSerializer
  has_one :creator, serializer: CreatorSerializer

  def links
    {
        self: api_restaurant_path(object.id),
        creator: api_creator_path(object.creator.id),
        locations: api_restaurant_locations_path(object.id),
        tags: api_restaurant_tags_path(object.id)
    }
  end



end

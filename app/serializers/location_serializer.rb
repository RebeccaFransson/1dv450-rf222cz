class LocationSerializer < ActiveModel::Serializer
  attributes :id, :address_city, :latitude, :longitude, :restaurant_id, :links

  def links
    {
        self: api_location_path(object.id),
        restaurant: api_restaurant_path(object.restaurant_id)
    }
  end
=begin
  def restaurant
    @rest = Restaurant.find_by_id(object.restaurant_id)#vill egentligen itne hämta allt från db, bara valda fält
    @creator = Creator.find_by_id(@rest.creator_id)
    {
        name: @rest.name,
        description: @rest.description,
        stars: @rest.stars,
        creator: {
            name: @creator.name,
            email: @creator.email
        }
    }
  end
=end
end

class TagSerializer < ActiveModel::Serializer
  attributes :id, :name

  def links
    {
        self: api_tag_path(object.id),
        restaurants: api_restaurant_tags(object.id)
    }
  end
end

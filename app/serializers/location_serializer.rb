class LocationSerializer < ActiveModel::Serializer
  attributes :address_and_city, :latitude, :longitude

end

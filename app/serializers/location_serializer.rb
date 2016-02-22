class LocationSerializer < ActiveModel::Serializer
  attributes :city, :address, :latitude, :longitude

  #has_one :restaurant

end

class Restaurant < ActiveRecord::Base
  has_many :locations
  has_and_belongs_to_many :tags
end

class Restaurant < ActiveRecord::Base
  has_many :locations
  has_and_belongs_to_many :tags

  validates :name,        presence: true, length: {within: 2..100}
  validates :description, presence: true, length: {within: 10..250}
  validates :stars,       presence: true, length: {within: 1..5}

end

class Tag < ActiveRecord::Base
  has_and_belongs_to_many :restaurants

  validates :name, presence: true, length: {within: 2..50}
end

class User < ActiveRecord::Base
  attr_accessor :password, :password_confirmation
  has_many :App
  EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  #attr_accessible :username, :email, :password, :password_confirmation

  validates :name, presence: true, length: {within: 3..50}
  validate :email, presence: true, format: {with: EMAIL_REGEX}, uniqueness: {case_sensitive: false}
  validates :password, presence: true, confirmation: true, length: {within: 6..40}

end

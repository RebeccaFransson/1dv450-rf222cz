class User < ActiveRecord::Base

  has_many :apps

  #attr_accessor :password, :password_confirmation

  EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  #attr_accessible :username, :email, :password, :password_confirmation

  validates :name, presence: true, length: {within: 3..50}
  validates :email, presence: true, format: {with: EMAIL_REGEX}, uniqueness: {case_sensitive: false}
  validates :password, presence: true, length: {within: 6..40}#confirmation: true,
  validates :password_confirmation, presence: true

  has_secure_password

end

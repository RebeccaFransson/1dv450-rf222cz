class User < ActiveRecord::Base

  has_many :apps

  EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  validates :name, presence: true, length: {within: 2..50}
  validates :email, presence: true, format: {with: EMAIL_REGEX}, uniqueness: {case_sensitive: false}
  validates :password, presence: true, length: {within: 6..40}#confirmation: true,
  validates :password_confirmation, presence: true

  has_secure_password

end

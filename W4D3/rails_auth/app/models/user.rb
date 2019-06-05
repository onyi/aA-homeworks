class User < ApplicationRecord
  before_validation(on: :create) do 
    p "helloworld"
    ensure_session_token
    p @session_token
  end

  validates :username, presence: true
  validates :session_token, presence: true
  validates :password_digest, presence: { message: "Password can't be blank
"}
  validates :password, length: { minimum: 8 }, allow_nil: true

  attr_reader :password

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def self.find_by_credentials(username, password)
    password_digest = BCrypt::Password.create(password)
    User.find_by(username: username, password_digest: password_digest)
  end

  def ensure_session_token
    @session_token ||= User.generate_session_token
  end

  def reset_session_token!
    @session_token = User.generate_session_token
  end

  def password=(password)
    # Encrypts password and save as @pasword_digest
    @password = BCrypt::Password.create(password)
  end

  def is_password?(password)
    @password_digest.is_password?(password)
  end


  


end
